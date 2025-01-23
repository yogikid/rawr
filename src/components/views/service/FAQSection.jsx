import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import PageSubHeading from "@/components/common/PageSubHeading";

const FAQSection = () => {
    const faqData = [
        {
            icon: "headset",
            question: "Do you provide post-launch support?",
            answer: "Yes, we offer post-launch support to ensure everything runs smoothly. We provide maintenance, updates, and troubleshooting as part of our service to make sure your website remains up-to-date and performs optimally."
        },
        {
            icon: "users",
            question: "What makes your services different from others?",
            answer:
                "We focus on creating tailored solutions that not only meet your technical needs but also provide a seamless user experience. We prioritize communication and collaboration to ensure that your vision is fully realized.",
        },
        {
            icon: "rectangles-mixed",
            question: "Do you offer custom designs or use templates?",
            answer:
                "We offer fully custom designs tailored to your brand and vision. Our designs are unique and crafted to meet your specific needs. We don’t rely on templates, ensuring your website stands out from the crowd.",
        },
        {
            icon: "timeline",
            question: "What is the process of working with you?",
            answer:
                "Our process involves initial consultation, designing, development, testing, and finally deployment. We ensure your satisfaction at every step.",
        },
        {
            icon: "clock-two",
            question: "How long does it take to complete a project?",
            answer:
                "The time required depends on the complexity of the project, but generally it takes 2-6 weeks from start to finish.",
        },
    ];

    const [expandedIndex, setExpandedIndex] = useState(0); // Default expand the first question

    const toggleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? -1 : index); // Toggle collapse/expand
    };

    return (
        <>
            <div className="">

                <PageSubHeading title="Frequently Asked Questions" description="Quick answers to common questions" icon="fad fa-circle-question text-text" />
                <div className="bg-container p-5 rounded-xl border border-stroke ">
                    {faqData.map((item, index) => (
                        <div
                            key={index}
                            className="overflow-hidden"
                        >
                            <div
                                className="flex items-center justify-between gap-4  cursor-pointer"
                                onClick={() => toggleExpand(index)}
                            >
                                <h3 className="text-text text-base font-medium">
                                    <i className={`text-subtext mr-2 fa-sm fad fa-${item.icon}`}></i>
                                    {item.question}</h3>
                                <i
                                    className={`text-subtext transition-transform duration-300 fal fa-plus mr-2 ${expandedIndex === index ? 'rotate-45' : 'rotate-0'}`}
                                />

                            </div>

                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={
                                    expandedIndex === index
                                        ? { height: "auto", opacity: 1 }
                                        : { height: 0, opacity: 0 }
                                }
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                            >
                                <div className="pt-1 text-sm bg-container text-subtext">{item.answer}</div>
                            </motion.div>
                            {
                                index !== faqData.length - 1 &&
                                <hr className="border-stroke my-3" />
                            }
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-start items-center gap-2">
                <p>Got any more question?</p>
                <Link className="font-semibold" href="/contact">
                    Get in touch
                </Link>
            </div>
        </>
    );
};

export default FAQSection;