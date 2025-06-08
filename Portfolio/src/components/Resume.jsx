import React from 'react';
import ResumeFile from "../assets/Lilli-Nappi-Resume-2025.pdf"

const Resume = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <iframe
                src={ResumeFile}
                title="Resume"
                width="100%"
                height="100%"
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    border: 'none',
                }}
            />
        </div>
    );
};

export default Resume;
