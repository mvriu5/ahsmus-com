import React from "react";
import {MeteorButton} from "@/components/MeteorButton";

export function Background() {
    return (
        <div className="h-[50rem] w-full dark:bg-dot-white/[0.2] relative flex items-center justify-center ">
            <div className="absolute inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
                <div className="space-y-5 flex flex-col justify-center text-center">
                    <h1 className="text-3xl font-bold xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-600">
                        AHSMUS.COM
                    </h1>
                    <div className="flex justify-center items-center">
                        <MeteorButton></MeteorButton>
                    </div>
                </div>
        </div>
    );
}