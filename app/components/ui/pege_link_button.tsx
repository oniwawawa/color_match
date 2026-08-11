"use client"
import react from "react";

export default function PageLinkButton({href,children,back = false}:{href?:string,children?:react.ReactNode,back?:boolean}){
    return(
        
        <a className={back ? "p-4 bg-gray-800 text-white" : "p-4 bg-gray-400"} href={back ? "/" : href}>
            {back ? "Back" : children}
        </a>
    );
}