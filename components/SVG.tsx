import { motion } from "framer-motion";

const menuVariants = {
    open: {
        opacity: 1,
        transition: {
            duration: 1
        }
    },
    closed: {
        opacity: 0,
        transition: {
            duration: 1
        }
    }
}

export default function SVG(){
    return(
        <motion.svg
        variants={menuVariants}
        initial="closed"
        animate="open"
        />
    )
}
