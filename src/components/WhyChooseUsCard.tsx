import React from 'react';

interface CardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const WhyChooseUsCard = ({ icon, title, description }: CardProps) => (
    <div className="w-80 xl:w-96 flex flex-col items-center p-4 space-y-4 bg-gray-50 rounded-lg shadow-xl">
        <div className="text-4xl mb-2">{icon}</div>
        <h3 className="text-xl font-semibold mb-2 text-gray-600">{title}</h3>
        <p className="text-center text-gray-600">{description}</p>
    </div>
);


export default WhyChooseUsCard;
