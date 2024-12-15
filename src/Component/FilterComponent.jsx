import React, { useState } from "react";

const FilterComponent = () => {
    const [activeTab, setActiveTab] = useState("all-posts");

    const tabs = [
        { id: "all-posts", label: "All Posts (32)" },
        { id: "article", label: "Article" },
        { id: "event", label: "Event" },
        { id: "education", label: "Education" },
        { id: "job", label: "Job" },
    ];

    const handleTabChange = (event) => {
        setActiveTab(event.target.value);
    };

    return (
        <>
            <div className="sticky top-0 z-10 bg-white flex justify-between items-center p-4 md:mx-44 mx-0 border-b ">
                
                <div className="sm:hidden flex items-center space-x-2">
                    <span className="text-lg font-semibold">Posts (368)</span>
                </div>
                <div className="sm:hidden">
                    <select
                        className="border rounded-md bg-gray-100 px-4 py-2"
                        value={activeTab}
                        onChange={handleTabChange}
                    >
                        {tabs.map((tab) => (
                            <option key={tab.id} value={tab.id}>
                                Filter : {tab.label}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="hidden sm:flex items-center space-x-4">
                    {tabs.map((tab) => (
                        <a
                            key={tab.id}
                            href={`#${tab.id}`}
                            className={`text-lg font-semibold ${
                                activeTab === tab.id ? "border-b-2 border-black" : "text-gray-600"
                            } hover:border-b-2 border-blue-400 pb-1`}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            {tab.label}
                        </a>
                    ))}
                </div>

                {/* Buttons Section */}
                <div className="hidden sm:flex items-center space-x-2">
                    <button className="border rounded-md bg-gray-100 px-4 py-2 font-normal">
                        Write Post ▾
                    </button>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-4 py-2">
                        + Join Group
                    </button>
                </div>
            </div>
        </>
    );
};

export default FilterComponent;
