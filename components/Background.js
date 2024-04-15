import React from "react";
import {MeteorButton} from "@/components/MeteorButton";

export function Background() {
    return (
        <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <div className="flex flex-col justify-center space-y-4 text-center">
                <div className="space-y-2">
                    <h1 className="text-3xl font-bold xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-600">
                        AHSMUS.COM
                    </h1>
                    <p className="max-w-[600px] text-zinc-200 md:text-xl dark:text-zinc-100 mx-auto mb-10">
                        Coming soon...
                    </p>
                    <div className="flex justify-center items-center">
                        <MeteorButton></MeteorButton>
                    </div>
                </div>
            </div>
        </div>
    );
}