"use client"

import React, { useEffect } from "react";
import { gsap } from "gsap";

const Cursor = () => {
    useEffect(() => {
        const cursor = document.getElementById("custom-cursor");
        const links = document.querySelectorAll("a");
        const cursorText = document.querySelector(".cursor-text");

        const onMouseMove = (event) => {
            const {clientX, clientY} = event;
            gsap.to(cursor, {duration: 0.3, x: clientX, y: clientY})
        }

        const onMouseEnterLink = (event) => {
            const link = event.target;
            if(link.classList.contains("view")){
                gsap.to(cursor, {scale: 2})
                cursorText.style.display = "block"
            } else {
                gsap.to(cursor, {scale: 2})
            }
        }

        const onMouseLeaveLink = () => {
            gsap.to(cursor, {scale: 1})
        }

        document.addEventListener("mousemove", onMouseMove);
        links.forEach((link) => {
            link.addEventListener("mouseenter", onMouseEnterLink)
            link.addEventListener("mouseleave", onMouseLeaveLink)
        })

        return () => {
            document.removeEventListener("mousemove", onMouseMove);
            links.forEach((link) => {
                link.removeEventListener("mouseenter", onMouseEnterLink)
                link.removeEventListener("mouseleave", onMouseLeaveLink)
            })
        }
    }, [])

    return (
        <div id="custom-cursor" className="custom-cursor z-50">
            <span className="pc"></span>
        </div>
    );
}

export default Cursor;