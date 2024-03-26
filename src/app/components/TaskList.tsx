import React from "react";

export function TaskList() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {(
                <div className="relative bg-gray-500 text-white p-4 rounded-lg">
                    <h2 className="text-lg font-semibold"></h2>
                    <p className="text-sm text-white mt-2"></p>
                    {/*<DeleteButton taskId={null}/>*/}
                </div>
            )}
        </div>
    )
}