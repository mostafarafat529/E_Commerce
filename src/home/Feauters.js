import React from "react";
import { Truck, Lock, RotateCcw, Clock } from "lucide-react";

const features = [
{ icon: Truck, text: "Free Shipping", subtext: "On orders over $100" },
{ icon: Lock, text: "Secure Payment", subtext: "100% protected payments" },
{ icon: RotateCcw, text: "Easy Returns", subtext: "30-day return policy" },
{ icon: Clock, text: "24/7 Support", subtext: "Dedicated customer service" },
];

const Features = () => {
return (
<div className="bg-light py-5">
    <div className="container">
    <div className="row text-center">
        {features.map((feature, index) => {
        const Icon = feature.icon;
        return (
            <div key={index} className="col-12 col-md-6 col-lg-3 mb-4 d-flex justify-content-center align-items-center">
            <div className="d-flex align-items-center">
                <Icon
                size={40}
                color="#6c757d"
                className="me-3 flex-shrink-0"
                />
                <div className="text-start">
                <p className="mb-0 fw-semibold text-dark">{feature.text}</p>
                <small className="text-muted">{feature.subtext}</small>
                </div>
            </div>
            </div>
        );
        })}
    </div>
    </div>
</div>
);
};

export default Features;
