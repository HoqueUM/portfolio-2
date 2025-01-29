"use client";
import { useState } from "react";
import { Collapse } from "react-collapse";

export default function DisplayOutput() {
  const [letters, setLetters] = useState("");
  const [length, setLength] = useState<number | null>(null);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({});

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateInputs()) {
      return;
    }

    const response = await fetch("/api/getValidWords", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ letters, length: length?.toString() }),
    });

    const data = await response.json();
    setResult(data.validWords);
    setSubmitted(true);
  };

  const validateInputs = () => {
    if (letters.length < 3) {
      setError("Number of letters should be at least 3");
      return false;
    }
    else if (letters.length > 10) {
      setError("Number of letters should be at most 10");
      return false;
    }
    if (!/^[a-zA-Z]+$/.test(letters)) {
      setError("Only letters are allowed");
      return false;
    }
    if (length === null) {
      setError("Please select a minimum length");
      return false;
    }
    setError("");
    return true;
  };

  const handleInputChange = (setter: (value: string) => void) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setter(event.target.value);
    setResult(null);
    setError("");
    setSubmitted(false);
  };

  const toggleSection = (length: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [length]: !prev[length],
    }));
  };

  const renderTrigger = (length: string, isOpen: boolean) => (
    <div className="collapsible-trigger flex justify-between items-center cursor-pointer rounded-md" onClick={() => toggleSection(length)}>
      <span>{`${length} letter words`}</span>
      <span className={`collapsible-arrow ${isOpen ? 'expanded' : 'collapsed'}`}>▼</span>
    </div>
  );

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        <div className="flex flex-col w-full sm:w-auto">
          <label htmlFor="letters" className="mb-2">Letters</label>
          <input
            id="letters"
            type="text"
            placeholder="Letters"
            value={letters}
            onChange={handleInputChange(setLetters)}
            className="rounded-md bg-white border p-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>
        <div className="flex flex-col w-full sm:w-auto">
          <label htmlFor="length" className="mb-2">Minimum length</label>
          <select
            id="length"
            onChange={(e) => {
              setLength(e.target.value ? Number(e.target.value) : null);
              setResult(null);
              setSubmitted(false);
            }}
            name="length"
            value={length ?? ""}
            className="rounded-md bg-white border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            <option value="" className="text-black">-</option>
            <option value="3" className="text-black">3</option>
            <option value="4" className="text-black">4</option>
          </select>
        </div>
        <div className="flex flex-col w-full sm:w-auto">
          <label className="mb-2 invisible">Submit</label>
          <button type="submit" className="rounded-md bg-gray-500 text-white p-2 hover:bg-gray-600 transition duration-300">Submit</button>
        </div>
      </form>
      <div className="flex flex-col justify-center items-center py-4 space-y-4 w-full">
        {error && <p className="text-red-500">{error}</p>}
        {submitted && (result && Object.keys(result).length > 0 ? (
          Object.keys(result).map((length) => (
            <div key={length} className="w-full">
              {renderTrigger(length, openSections[length])}
              <Collapse isOpened={openSections[length]}>
                <ul className="p-4">
                  {(result[length] as string[]).map((word: string) => (
                    <li key={word}>{word}</li>
                  ))}
                </ul>
              </Collapse>
              <div className="w-full h-[1px] bg-gray-300 my-4"></div>
            </div>
          ))
        ) : (
          <p>No words found</p>
        ))}
      </div>
    </div>
  );
}