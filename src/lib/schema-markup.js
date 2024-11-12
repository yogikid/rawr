export const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Person",
            "name": "Dwi Wijaya",
            "url": "https://dwiwijaya.com/",
            "jobTitle": "Fullstack Developer",
            "worksFor": { "@type": "Organization", "name": "Freelancer" },
            "sameAs": [
                "https://www.linkedin.com/in/dwi-wijaya",
                "https://github.com/dwiwijaya",
                "https://www.instagram.com/_dwiwijaya_/"
            ]
        },
        {
            "@type": "WebSite",
            "name": "Dwi Wijaya - Personal Website",
            "url": "https://dwiwijaya.com/",
            "potentialAction": {
                "@type": "SearchAction",
                "target": "https://dwiwijaya.com/?s={search_term_string}",
                "query-input": "required name=search_term_string"
            }
        },
        {
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://dwiwijaya.com/" },
                { "@type": "ListItem", "position": 2, "name": "Dashboard", "item": "https://dwiwijaya.com/dashboard" },
                { "@type": "ListItem", "position": 3, "name": "About", "item": "https://dwiwijaya.com/about" },
                { "@type": "ListItem", "position": 4, "name": "Skillset", "item": "https://dwiwijaya.com/skillset" },
                { "@type": "ListItem", "position": 5, "name": "Experience", "item": "https://dwiwijaya.com/experience" },
                { "@type": "ListItem", "position": 6, "name": "Services", "item": "https://dwiwijaya.com/services" },
                { "@type": "ListItem", "position": 7, "name": "Portfolio", "item": "https://dwiwijaya.com/portfolio" },
                { "@type": "ListItem", "position": 8, "name": "Blog", "item": "https://dwiwijaya.com/blog" },
                { "@type": "ListItem", "position": 9, "name": "Contact", "item": "https://dwiwijaya.com/contact" },
                { "@type": "ListItem", "position": 10, "name": "Guestbook", "item": "https://dwiwijaya.com/guestbook" }
            ]
        },
        {
            "@type": "ItemList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "url": "https://dwiwijaya.com/" },
                { "@type": "ListItem", "position": 2, "name": "Dashboard", "url": "https://dwiwijaya.com/dashboard" },
                { "@type": "ListItem", "position": 3, "name": "About", "url": "https://dwiwijaya.com/about" },
                { "@type": "ListItem", "position": 4, "name": "Skillset", "url": "https://dwiwijaya.com/skillset" },
                { "@type": "ListItem", "position": 5, "name": "Experience", "url": "https://dwiwijaya.com/experience" },
                { "@type": "ListItem", "position": 6, "name": "Services", "url": "https://dwiwijaya.com/services" },
                { "@type": "ListItem", "position": 7, "name": "Portfolio", "url": "https://dwiwijaya.com/portfolio" },
                { "@type": "ListItem", "position": 8, "name": "Blog", "url": "https://dwiwijaya.com/blog" },
                { "@type": "ListItem", "position": 9, "name": "Contact", "url": "https://dwiwijaya.com/contact" },
                { "@type": "ListItem", "position": 10, "name": "Guestbook", "url": "https://dwiwijaya.com/guestbook" }
            ]
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What services do you offer?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "I offer web development, app development, UI/UX design, and consulting services tailored to clients' needs."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What projects have you worked on?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "I’ve worked on various web development projects, including e-commerce sites, personal blogs, applications, UI/UX design projects, and more."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Do you offer freelance services?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, I'm available for freelance projects. Feel free to reach out for availability."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How can I get in touch with you?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "I’d love to hear about your project! You can reach out through my social media channels or send me a message via the contact form. I’ll make sure to respond within 24 hours to discuss how we can bring your vision to life."
                    }
                }
            ]
        }
    ]
};
