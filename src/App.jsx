import React, { useEffect, useState } from "react";
import './App.css'

import profilePhoto from './assets/Noor.png';

import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
} from 'chart.js'

import { Radar } from 'react-chartjs-2'


ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
)

const ploEvaluation = [
    {
        id: 'PLO1',
        name: 'Engineering Knowledge',
        score: 0.000,
        status: 'Development Priority',
        evaluation:
            'Current attainment indicates that further development is required in demonstrating the application of mathematics, science and engineering principles to complex engineering problems.',
        evidence:
            'Engineering coursework, embedded-system development and technical project work.',
        action:
            'Strengthen the documented connection between engineering theory, calculations and practical project decisions.'
    },
    {
        id: 'PLO2',
        name: 'Problem Analysis',
        score: 0.375,
        status: 'Developing',
        evaluation:
            'Problem-analysis capability is developing through academic and project-based engineering activities, but further evidence is required to demonstrate consistent analysis of complex engineering problems.',
        evidence:
            'FYP problem investigation, system troubleshooting and engineering coursework.',
        action:
            'Apply more structured problem-analysis methods and document assumptions, constraints and engineering justification.'
    },
    {
        id: 'PLO3',
        name: 'Engineering Tools & Techniques',
        score: 1.000,
        status: 'Attained',
        evaluation:
            'Strong attainment is demonstrated through the selection and application of programming, simulation, machine-learning and embedded-system tools across different engineering projects.',
        evidence:
            'Python, MATLAB/Simulink, Arduino, machine-learning frameworks and development tools.',
        action:
            'Continue expanding experience with industry-standard engineering tools and development environments.'
    },
    {
        id: 'PLO4',
        name: 'Investigation & Research',
        score: 1.000,
        status: 'Attained',
        evaluation:
            'Research and investigation skills have been developed through dataset analysis, experimentation, model evaluation and technical research undertaken during engineering projects.',
        evidence:
            'Final Year Project research, PHM 2010 dataset analysis and machine-learning model evaluation.',
        action:
            'Continue strengthening experimental validation, critical comparison and research documentation.'
    },
    {
        id: 'PLO5',
        name: 'Innovative Engineering Solutions',
        score: 1.000,
        status: 'Attained',
        evaluation:
            'Project work demonstrates the ability to develop practical engineering solutions that integrate software, intelligent systems and embedded technologies.',
        evidence:
            'Predictive tool-wear monitoring, secure attendance system and smart parking/garage systems.',
        action:
            'Develop solutions further by considering scalability, user requirements and real-world engineering constraints.'
    },
    {
        id: 'PLO6',
        name: 'Professional Communication',
        score: 1.000,
        status: 'Attained',
        evaluation:
            'Technical documentation, academic presentations and internship responsibilities have contributed to effective communication in engineering and educational environments.',
        evidence:
            'Technical documentation, STEM instruction, presentations and project reporting.',
        action:
            'Continue improving concise communication of complex engineering information to technical and non-technical audiences.'
    },
    {
        id: 'PLO7',
        name: 'Sustainability & Environment',
        score: 1.000,
        status: 'Attained',
        evaluation:
            'Attainment reflects awareness of sustainable engineering considerations and the wider environmental implications associated with engineering solutions.',
        evidence:
            'Engineering coursework and consideration of efficiency, maintenance and resource utilisation in project work.',
        action:
            'Integrate measurable sustainability criteria more explicitly into future engineering design decisions.'
    },
    {
        id: 'PLO8',
        name: 'Engineering Responsibilities',
        score: 0.667,
        status: 'Developing',
        evaluation:
            'Awareness of safety, social, legal and professional responsibilities is developing, with further practical exposure required to apply these considerations in industrial engineering environments.',
        evidence:
            'Cybersecurity development, engineering coursework and internship experience.',
        action:
            'Increase familiarity with professional standards, safety requirements, legal responsibilities and inclusive engineering practice.'
    },
    {
        id: 'PLO9',
        name: 'Professionalism & Ethics',
        score: 1.000,
        status: 'Attained',
        evaluation:
            'Academic and technical activities demonstrate awareness of responsible engineering practice, particularly in relation to secure system development and professional conduct.',
        evidence:
            'Cybersecurity project work, academic responsibilities and professional internship activities.',
        action:
            'Continue evaluating ethical consequences, privacy, security and professional accountability in engineering decisions.'
    },
    {
        id: 'PLO10',
        name: 'Teamwork & Leadership',
        score: 1.000,
        status: 'Attained',
        evaluation:
            'Collaborative academic activities and internship responsibilities have developed the ability to contribute within multidisciplinary and team-based environments.',
        evidence:
            'Internship collaboration, academic group activities and STEM programme delivery.',
        action:
            'Seek further opportunities involving technical leadership, coordination and multidisciplinary teamwork.'
    },
    {
        id: 'PLO11',
        name: 'Lifelong Learning',
        score: 1.000,
        status: 'Attained',
        evaluation:
            'Independent learning across machine learning, embedded systems, programming and engineering tools demonstrates readiness for continuous professional development.',
        evidence:
            'Independent technical learning, FYP development and adoption of new software and engineering technologies.',
        action:
            'Maintain continuous learning through professional training, certifications, technical projects and emerging technologies.'
    },
    {
        id: 'PLO12',
        name: 'Entrepreneurship & Project Management',
        score: 1.000,
        status: 'Attained',
        evaluation:
            'Project-based academic work has developed experience in planning, implementation, technical decision-making and management of engineering development activities.',
        evidence:
            'Final Year Project planning and development of multidisciplinary engineering systems.',
        action:
            'Develop greater exposure to budgeting, risk management, commercial considerations and engineering project leadership.'
    }
]

function App() {

    // =========================================================
    // PROGRAMME LEARNING OUTCOME DATA
    // Change only the "score" values when final results arrive.
    // =========================================================

    const ploOutcomes = [
        {
            code: 'PLO1',
            title: 'Engineering Knowledge',
            score: 0.000,
            description:
                'Ability to gain and apply principles of Mathematics, Science and Engineering to the solutions of complex engineering problems.'
        },
        {
            code: 'PLO2',
            title: 'Problem Analysis',
            score: 0.375,
            description:
                'Ability to undertake complex engineering problem analysis and apply engineering principles to solve them.'
        },
        {
            code: 'PLO3',
            title: 'Engineering Tools & Techniques',
            score: 1.000,
            description:
                'Ability to select and use suitable tools and techniques for complex engineering problems.'
        },
        {
            code: 'PLO4',
            title: 'Investigation & Research',
            score: 1.000,
            description:
                'Ability to investigate complex engineering problems using research techniques.'
        },
        {
            code: 'PLO5',
            title: 'Innovative Engineering Solutions',
            score: 1.000,
            description:
                'Ability to design innovative solutions for complex engineering problems.'
        },
        {
            code: 'PLO6',
            title: 'Professional Communication',
            score: 1.000,
            description:
                'Ability to communicate effectively and professionally on complex engineering activities.'
        },
        {
            code: 'PLO7',
            title: 'Sustainability & Environment',
            score: 1.000,
            description:
                'Ability to comprehend and demonstrate good practices of engineering in sustainable development and environmental considerations for the solutions of complex engineering problems.'
        },
        {
            code: 'PLO8',
            title: 'Engineering Responsibilities',
            score: 0.667,
            description:
                'Ability to engage in professional engineering practice for safety, health, social, cultural and legal responsibilities in developing solutions for complex engineering problems.'
        },
        {
            code: 'PLO9',
            title: 'Professionalism & Ethics',
            score: 1.000,
            description:
                'Ability to execute the responsibilities of an Engineer professionally and ethically.'
        },
        {
            code: 'PLO10',
            title: 'Teamwork & Leadership',
            score: 1.000,
            description:
                'Ability to function effectively as a team leader or a member in a team within multi-disciplinary settings.'
        },
        {
            code: 'PLO11',
            title: 'Lifelong Learning',
            score: 1.000,
            description:
                'Ability to recognize the need for, and be able to engage in independent and life-long learning towards continuous professional development.'
        },
        {
            code: 'PLO12',
            title: 'Entrepreneurship & Project Management',
            score: 1.000,
            description:
                'Ability to demonstrate entrepreneurship skills, engineering project management and economic decision making in multi-disciplinary environments.'
        }
    ]


    const radarData = {
        labels: ploOutcomes.map((plo) => plo.code),

        datasets: [
            {
                label: 'PLO Attainment',
                data: ploOutcomes.map((plo) => plo.score),

                backgroundColor: 'rgba(139, 92, 246, 0.18)',
                borderColor: '#9b5cff',

                pointBackgroundColor: '#ff9f1c',
                pointBorderColor: '#080611',
                pointHoverBackgroundColor: '#ffb84d',
                pointHoverBorderColor: '#ffffff',

                borderWidth: 2,
                pointRadius: 4,
                pointHoverRadius: 6
            }
        ]
    }


    const radarOptions = {
        responsive: true,
        maintainAspectRatio: false,

        plugins: {
            legend: {
                display: false
            },

            tooltip: {
                callbacks: {
                    label: function (context) {
                        return ` Attainment: ${context.raw.toFixed(3)}`
                    }
                }
            }
        },

        scales: {
            r: {
                min: 0,
                max: 1,

                ticks: {
                    stepSize: 0.2,
                    display: false
                },

                angleLines: {
                    color: 'rgba(139, 92, 246, 0.18)'
                },

                grid: {
                    color: 'rgba(139, 92, 246, 0.18)'
                },

                pointLabels: {
                    color: '#d8d4df',
                    font: {
                        family: 'IBM Plex Mono',
                        size: 12
                    }
                }
            }
        }
    }


    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {

        const sectionIds = [
            "home",
            "outcomes",
            "education",
            "experience",
            "projects",
            "skills",
            "languages",
            "swot",
            "evaluation"
        ];

        let ticking = false;

        const updateActiveSection = () => {

            const navbarHeight = 74;

            // Position below navbar where a section becomes active
            const triggerPoint = navbarHeight + 220;

            let currentSection = "home";

            sectionIds.forEach((id) => {

                const section = document.getElementById(id);

                if (!section) return;

                const rect = section.getBoundingClientRect();

                if (rect.top <= triggerPoint) {
                    currentSection = id;
                }

            });

            setActiveSection((previous) =>
                previous === currentSection
                    ? previous
                    : currentSection
            );

            ticking = false;
        };


        const handleScroll = () => {

            if (!ticking) {

                window.requestAnimationFrame(updateActiveSection);

                ticking = true;
            }

        };


        updateActiveSection();

        window.addEventListener("scroll", handleScroll, {
            passive: true
        });

        window.addEventListener("resize", handleScroll);


        return () => {

            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);

        };

    }, []);


    const [showEmailToast, setShowEmailToast] = useState(false);

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText("noor.rashid.2003@gmail.com");

            setShowEmailToast(true);

            setTimeout(() => {
                setShowEmailToast(false);
            }, 2500);
        } catch (error) {
            console.error("Failed to copy email:", error);
        }
    };


    return (
        <div className="app">

            {/* =====================================================
                NAVIGATION
            ====================================================== */}

            <header className="navbar">

                <a href="#home" className="brand">
                    NOOR.RASHID
                </a>

                <nav>

                    <a
                        href="#outcomes"
                        className={activeSection === "outcomes" ? "active" : ""}
                    >
                        Outcomes
                    </a>

                    <a
                        href="#education"
                        className={activeSection === "education" ? "active" : ""}
                    >
                        Education
                    </a>

                    <a
                        href="#experience"
                        className={activeSection === "experience" ? "active" : ""}
                    >
                        Experience
                    </a>

                    <a
                        href="#projects"
                        className={activeSection === "projects" ? "active" : ""}
                    >
                        Projects
                    </a>

                    <a
                        href="#skills"
                        className={activeSection === "skills" ? "active" : ""}
                    >
                        Skills
                    </a>

                    <a
                        href="#languages"
                        className={activeSection === "languages" ? "active" : ""}
                    >
                        Languages
                    </a>

                    <a
                        href="#swot"
                        className={activeSection === "swot" ? "active" : ""}
                    >
                        SWOT
                    </a>

                    <a
                        href="#evaluation"
                        className={activeSection === "evaluation" ? "active" : ""}
                    >
                        Evaluation
                    </a>

                </nav>

            </header>


            <main>

                {/* =====================================================
    00 — PROFILE
====================================================== */}

                <section className="hero-section" id="home">

                    <div className="hero-layout">

                        {/* =========================
            LEFT — PROFILE CONTENT
        ========================== */}

                        <div className="hero-content">

                            <p className="section-code">
                                00 — SYSTEM PROFILE
                            </p>

                            <h1>
                                NOOR UR <span>RASHID</span>
                            </h1>

                            <h2>
                                COMPUTER ENGINEERING STUDENT
                            </h2>

                            <p className="specialization">
                                AI • MACHINE LEARNING • EMBEDDED SYSTEMS • IoT
                            </p>

                            <p className="intro">
                                Computer Engineering undergraduate with hands-on experience in
                                embedded systems, machine learning, web application development,
                                and hardware-software integration. Experienced in developing
                                Arduino-based automation systems, secure web applications using
                                Python and Flask, and AI-driven engineering projects.
                            </p>

                            <div className="contact-links">

                                <button
                                    type="button"
                                    className="contact-button"
                                    onClick={copyEmail}
                                >
                                    Email
                                </button>

                                <a
                                    href="https://www.linkedin.com/in/noor-ur-rashid-148b352a3/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    LinkedIn
                                </a>

                                <a
                                    href="https://github.com/Noor-Ur-Rashid"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    GitHub
                                </a>

                            </div>

                            <p className="location">
                                Seri Kembangan, Selangor, Malaysia
                            </p>

                        </div>


                        {/* =========================
            RIGHT — PROFILE PHOTO
        ========================== */}

                        <div className="hero-photo-area">

                            <div className="hero-photo-frame">

                                <img
                                    src={profilePhoto}
                                    alt="Noor Ur Rashid"
                                    className="hero-photo"
                                />

                                <span className="photo-corner top-left"></span>
                                <span className="photo-corner bottom-right"></span>

                            </div>

                            <div className="photo-info">

                                <span>
                                    PROFILE // 001
                                </span>

                                <span>
                                    COMPUTER ENGINEERING
                                </span>

                            </div>

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    01 — PROGRAMME LEARNING OUTCOMES
                ====================================================== */}

                <section id="outcomes" className="portfolio-section outcomes-section">

                    <p className="section-code">
                        01 — DIAGNOSTIC READOUT
                    </p>

                    <div className="section-heading-row">

                        <div>
                            <h2>Programme Learning Outcomes</h2>

                            <p className="section-subtitle">
                                APU School of Engineering • 12 Programme Learning Outcomes
                            </p>
                        </div>

                        <div className="status-tag">
                            CURRENT RECORD
                        </div>

                    </div>


                    <div className="plo-dashboard">

                        {/* RADAR CHART */}

                        <div className="radar-card">

                            <div className="card-top-line">

                                <span>PLO ATTAINMENT PROFILE</span>

                                <span>0.00 — 1.00</span>

                            </div>

                            <div className="radar-wrapper">

                                <Radar
                                    data={radarData}
                                    options={radarOptions}
                                />

                            </div>

                            <p className="chart-caption">
                                NOOR UR RASHID — CURRENT PROGRAMME OUTCOME ATTAINMENT
                            </p>

                        </div>


                        {/* SUMMARY */}

                        <div className="plo-summary-card">

                            <p className="summary-label">
                                CURRENT ATTAINMENT
                            </p>

                            <div className="summary-value">
                                12
                            </div>

                            <p className="summary-description">
                                Programme Learning Outcomes monitored throughout the
                                Computer Engineering programme.
                            </p>


                            <div className="summary-divider"></div>


                            <div className="summary-stat">

                                <span>Maximum Scale</span>

                                <strong>1.000</strong>

                            </div>

                            <div className="summary-stat">

                                <span>Programme</span>

                                <strong>Computer Engineering</strong>

                            </div>

                            <div className="summary-stat">

                                <span>Institution</span>

                                <strong>APU</strong>

                            </div>

                            <div className="summary-stat">

                                <span>Record Status</span>

                                <strong className="provisional">
                                    PROVISIONAL
                                </strong>

                            </div>

                        </div>

                    </div>


                    {/* PLO LIST */}

                    <div className="plo-list-header">

                        <span>#</span>

                        <span>Programme Learning Outcome</span>

                        <span>Score</span>

                    </div>


                    <div className="plo-grid">

                        {ploOutcomes.map((plo) => (

                            <article
                                className="plo-card"
                                key={plo.code}
                            >

                                <div className="plo-card-heading">

                                    <span className="plo-code">
                                        {plo.code}
                                    </span>

                                    <span className="plo-score">
                                        {plo.score.toFixed(3)}
                                    </span>

                                </div>


                                <h3>
                                    {plo.title}
                                </h3>


                                <p>
                                    {plo.description}
                                </p>


                                <div className="score-track">

                                    <div
                                        className="score-fill"
                                        style={{
                                            width: `${plo.score * 100}%`
                                        }}
                                    ></div>

                                </div>

                            </article>

                        ))}

                    </div>


                    <div className="provisional-note">

                        <span className="note-indicator"></span>

                        <p>
                            The displayed PLO attainment values are provisional and will
                            be updated when the final Programme Learning Outcome results
                            are available.
                        </p>

                    </div>

                </section>


                {/* =====================================================
                    02 — EDUCATION
                ====================================================== */}

                <section id="education" className="portfolio-section education-section">

                    <p className="section-code">
                        02 — ACADEMIC RECORD
                    </p>

                    <div className="section-heading-row">
                        <div>
                            <h2>Education</h2>

                            <p className="section-subtitle">
                                Academic development and engineering foundation
                            </p>
                        </div>

                        <div className="status-tag">
                            2021 — 2026
                        </div>
                    </div>


                    <div className="education-timeline">

                        <article className="education-item">

                            <div className="education-marker"></div>

                            <div className="education-content">

                                <div className="education-top">

                                    <div>
                                        <span className="education-level">
                                            BACHELOR'S DEGREE
                                        </span>

                                        <h3>
                                            Bachelor of Computer Engineering
                                        </h3>

                                        <p className="education-program">
                                            Dual Degree Programme
                                        </p>
                                    </div>

                                    <span className="education-date">
                                        SEP 2022 — OCT 2026
                                    </span>

                                </div>


                                <p className="education-institution">
                                    Asia Pacific University of Technology & Innovation (APU),
                                    Malaysia
                                </p>

                                <p className="education-institution secondary">
                                    De Montfort University (DMU), United Kingdom
                                </p>


                                <div className="education-divider"></div>


                                <p className="education-description">
                                    Undergraduate programme focused on computer engineering,
                                    embedded systems, programming, electronics, artificial
                                    intelligence, machine learning, hardware-software integration,
                                    and engineering problem solving.
                                </p>


                                <div className="education-tags">
                                    <span>Computer Engineering</span>
                                    <span>Embedded Systems</span>
                                    <span>AI & Machine Learning</span>
                                    <span>Programming</span>
                                    <span>Electronics</span>
                                </div>

                            </div>

                        </article>


                        <article className="education-item">

                            <div className="education-marker"></div>

                            <div className="education-content">

                                <div className="education-top">

                                    <div>
                                        <span className="education-level">
                                            FOUNDATION
                                        </span>

                                        <h3>
                                            Foundation in Engineering
                                        </h3>
                                    </div>

                                    <span className="education-date">
                                        SEP 2021 — AUG 2022
                                    </span>

                                </div>


                                <p className="education-institution">
                                    Asia Pacific University of Technology & Innovation (APU),
                                    Malaysia
                                </p>


                                <div className="education-divider"></div>


                                <p className="education-description">
                                    Developed the mathematical, scientific, analytical and
                                    technical foundation required for progression into the
                                    Computer Engineering degree programme.
                                </p>

                            </div>

                        </article>


                        <article className="education-item">

                            <div className="education-marker"></div>

                            <div className="education-content">

                                <div className="education-top">

                                    <div>
                                        <span className="education-level">
                                            SECONDARY EDUCATION
                                        </span>

                                        <h3>
                                            Cambridge O-Level
                                        </h3>
                                    </div>

                                    <span className="education-date">
                                        2021
                                    </span>

                                </div>


                                <p className="education-institution">
                                    Paramount School and College, Bangladesh
                                </p>

                            </div>

                        </article>

                    </div>

                </section>


                {/* =====================================================
                    03 — EXPERIENCE
                ====================================================== */}

                <section id="experience" className="portfolio-section experience-section">

                    <p className="section-code">
                        03 — PROFESSIONAL LOG
                    </p>

                    <div className="section-heading-row">

                        <div>
                            <h2>Work Experience</h2>

                            <p className="section-subtitle">
                                Practical engineering, technical support and STEM experience
                            </p>
                        </div>

                        <div className="status-tag">
                            2025
                        </div>

                    </div>


                    <div className="experience-timeline">

                        <article className="experience-item">

                            <div className="experience-marker"></div>

                            <div className="experience-content">

                                <div className="experience-top">

                                    <div>

                                        <span className="experience-type">
                                            TECHNICAL INTERNSHIP
                                        </span>

                                        <h3>
                                            Technical Intern
                                        </h3>

                                        <p className="experience-company">
                                            EDU360 Academy — Children's S.T.E.M. Academy
                                        </p>

                                    </div>

                                    <span className="experience-date">
                                        SEP 2025 — DEC 2025
                                    </span>

                                </div>


                                <div className="experience-divider"></div>


                                <div className="experience-details">

                                    <div className="experience-description">

                                        <p>
                                            Supported technical and STEM-based activities involving
                                            embedded systems, Arduino projects, computer hardware,
                                            troubleshooting and practical technology education.
                                        </p>

                                    </div>


                                    <ul className="experience-list">

                                        <li>
                                            Developed Arduino-based sensor projects and STEM learning
                                            activities.
                                        </li>

                                        <li>
                                            Performed laptop troubleshooting and hardware diagnostics.
                                        </li>

                                        <li>
                                            Assisted in debugging and testing embedded systems.
                                        </li>

                                        <li>
                                            Prepared technical documentation and instructional materials.
                                        </li>

                                        <li>
                                            Conducted practical STEM and technology sessions for students.
                                        </li>

                                    </ul>

                                </div>


                                <div className="experience-tools">

                                    <span className="tools-label">
                                        EXPERIENCE AREAS
                                    </span>

                                    <div className="experience-tags">

                                        <span>Arduino</span>
                                        <span>Embedded Systems</span>
                                        <span>Hardware Diagnostics</span>
                                        <span>Troubleshooting</span>
                                        <span>Technical Documentation</span>
                                        <span>STEM Education</span>

                                    </div>

                                </div>


                                <div className="experience-learning">

                                    <span className="learning-code">
                                        PROFESSIONAL DEVELOPMENT
                                    </span>

                                    <p>
                                        The internship strengthened practical problem-solving,
                                        technical communication, adaptability and the ability to
                                        explain engineering concepts in a clear and structured manner.
                                    </p>

                                </div>

                            </div>

                        </article>

                    </div>

                </section>


                {/* =====================================================
                    04 — PROJECTS
                ====================================================== */}

                <section id="projects" className="portfolio-section projects-section">

                    <p className="section-code">
                        04 — BUILD LOG
                    </p>

                    <div className="section-heading-row">

                        <div>
                            <h2>Projects & Research</h2>

                            <p className="section-subtitle">
                                Selected academic and engineering development projects
                            </p>
                        </div>

                        <div className="status-tag">
                            3 FEATURED PROJECTS
                        </div>

                    </div>


                    <div className="projects-grid">

                        {/* =====================================================
            PROJECT 01 — FYP
        ====================================================== */}

                        <article className="project-card featured-project">

                            <div className="project-top">

                                <span className="project-number">
                                    01
                                </span>

                                <span className="project-type">
                                    FINAL YEAR PROJECT
                                </span>

                            </div>


                            <div className="project-content">

                                <h3>
                                    AI-Based Predictive Tool Wear Monitoring in CNC Machining
                                </h3>

                                <p className="project-description">
                                    Developed a machine learning-based predictive tool wear
                                    monitoring system using machining sensor data. The project
                                    applies feature extraction and preprocessing techniques to
                                    the PHM 2010 dataset and uses Random Forest models to
                                    estimate tool wear conditions.
                                </p>


                                <div className="project-divider"></div>


                                <div className="project-details-grid">

                                    <div className="project-detail">

                                        <span className="detail-label">
                                            DEVELOPMENT
                                        </span>

                                        <p>
                                            Performed feature extraction and preprocessing
                                            using PHM 2010 machining datasets.
                                        </p>

                                    </div>


                                    <div className="project-detail">

                                        <span className="detail-label">
                                            AI MODEL
                                        </span>

                                        <p>
                                            Implemented Random Forest machine learning models
                                            for predictive tool wear estimation.
                                        </p>

                                    </div>


                                    <div className="project-detail">

                                        <span className="detail-label">
                                            INTERFACE
                                        </span>

                                        <p>
                                            Developed a Tkinter-based graphical user interface
                                            for interacting with the predictive system.
                                        </p>

                                    </div>

                                </div>


                                <div className="project-technologies">

                                    <span>Python</span>
                                    <span>Random Forest</span>
                                    <span>Scikit-Learn</span>
                                    <span>Tkinter</span>
                                    <span>PHM 2010</span>
                                    <span>Machine Learning</span>

                                </div>

                            </div>


                            <div className="project-footer">

                                <span>
                                    ENGINEERING AI / PREDICTIVE MAINTENANCE
                                </span>

                                <span>
                                    FYP
                                </span>

                            </div>

                        </article>



                        {/* =====================================================
            PROJECT 02 — ATTENDANCE SYSTEM
        ====================================================== */}

                        <article className="project-card">

                            <div className="project-top">

                                <span className="project-number">
                                    02
                                </span>

                                <span className="project-type">
                                    CYBERSECURITY / WEB SYSTEM
                                </span>

                            </div>


                            <div className="project-content">

                                <h3>
                                    Secure Web-Based Attendance Management System
                                </h3>

                                <p className="project-description">
                                    Developed a secure attendance management platform using
                                    Flask and SQLite with authentication, access control and
                                    attendance reporting features.
                                </p>


                                <div className="project-divider"></div>


                                <div className="project-highlight-list">

                                    <p>
                                        <span>01</span>
                                        Role-based access control
                                    </p>

                                    <p>
                                        <span>02</span>
                                        OTP verification and CAPTCHA validation
                                    </p>

                                    <p>
                                        <span>03</span>
                                        Password hashing and secure authentication
                                    </p>

                                    <p>
                                        <span>04</span>
                                        Attendance recording and reporting functionality
                                    </p>

                                </div>


                                <div className="project-technologies">

                                    <span>Python</span>
                                    <span>Flask</span>
                                    <span>SQLite</span>
                                    <span>HTML</span>
                                    <span>CSS</span>
                                    <span>bcrypt</span>

                                </div>

                            </div>


                            <div className="project-footer">

                                <span>
                                    SECURE APPLICATION DEVELOPMENT
                                </span>

                                <span>
                                    WEB
                                </span>

                            </div>

                        </article>



                        {/* =====================================================
            PROJECT 03 — SMART PARKING
        ====================================================== */}

                        <article className="project-card">

                            <div className="project-top">

                                <span className="project-number">
                                    03
                                </span>

                                <span className="project-type">
                                    EMBEDDED SYSTEMS
                                </span>

                            </div>


                            <div className="project-content">

                                <h3>
                                    Smart Parking & Garage Access Systems
                                </h3>

                                <p className="project-description">
                                    Developed Arduino-based smart parking and RFID garage
                                    access systems incorporating sensor-based detection,
                                    authentication and automated access control.
                                </p>


                                <div className="project-divider"></div>


                                <div className="project-highlight-list">

                                    <p>
                                        <span>01</span>
                                        RFID-based authentication
                                    </p>

                                    <p>
                                        <span>02</span>
                                        Ultrasonic vehicle detection
                                    </p>

                                    <p>
                                        <span>03</span>
                                        Servo motor control and emergency override
                                    </p>

                                    <p>
                                        <span>04</span>
                                        LED, buzzer and LCD user feedback
                                    </p>

                                </div>


                                <div className="project-technologies">

                                    <span>Arduino Uno</span>
                                    <span>RFID RC522</span>
                                    <span>HC-SR04</span>
                                    <span>Servo Motor</span>
                                    <span>Embedded C/C++</span>

                                </div>

                            </div>


                            <div className="project-footer">

                                <span>
                                    EMBEDDED AUTOMATION
                                </span>

                                <span>
                                    HARDWARE
                                </span>

                            </div>

                        </article>

                    </div>

                </section>


                {/* =====================================================
                    05 — SKILLS
                ====================================================== */}

                <section id="skills" className="portfolio-section skills-section">

                    <p className="section-code">
                        05 — CAPABILITIES
                    </p>

                    <div className="section-heading-row">

                        <div>
                            <h2>Skills & Tools</h2>

                            <p className="section-subtitle">
                                Technical capabilities developed through academic,
                                engineering and project experience
                            </p>
                        </div>

                        <div className="status-tag">
                            TECHNICAL STACK
                        </div>

                    </div>


                    <div className="skills-layout">

                        {/* LEFT SIDE — CAPABILITY MATRIX */}

                        <div className="skills-matrix">

                            <div className="skills-table-header">
                                <span>#</span>
                                <span>CATEGORY</span>
                                <span>TOOLS / TECHNOLOGIES</span>
                            </div>


                            <div className="skill-row">

                                <span className="skill-number">01</span>

                                <div className="skill-category">
                                    <span className="skill-category-code">
                                        PROGRAMMING
                                    </span>

                                    <h3>Programming Languages</h3>
                                </div>

                                <div className="skill-items">
                                    <span>Python</span>
                                    <span>Java</span>
                                    <span>C</span>
                                    <span>C++</span>
                                    <span>JavaScript</span>
                                    <span>VHDL</span>
                                </div>

                            </div>


                            <div className="skill-row">

                                <span className="skill-number">02</span>

                                <div className="skill-category">
                                    <span className="skill-category-code">
                                        INTELLIGENT SYSTEMS
                                    </span>

                                    <h3>AI & Machine Learning</h3>
                                </div>

                                <div className="skill-items">
                                    <span>Scikit-Learn</span>
                                    <span>Random Forest</span>
                                    <span>TensorFlow</span>
                                    <span>OpenCV</span>
                                    <span>Feature Extraction</span>
                                    <span>Model Evaluation</span>
                                </div>

                            </div>


                            <div className="skill-row">

                                <span className="skill-number">03</span>

                                <div className="skill-category">
                                    <span className="skill-category-code">
                                        HARDWARE
                                    </span>

                                    <h3>Embedded Systems & IoT</h3>
                                </div>

                                <div className="skill-items">
                                    <span>Arduino</span>
                                    <span>ESP32</span>
                                    <span>Sensors</span>
                                    <span>RFID</span>
                                    <span>Microcontrollers</span>
                                    <span>Hardware Integration</span>
                                </div>

                            </div>


                            <div className="skill-row">

                                <span className="skill-number">04</span>

                                <div className="skill-category">
                                    <span className="skill-category-code">
                                        SOFTWARE
                                    </span>

                                    <h3>Web Development</h3>
                                </div>

                                <div className="skill-items">
                                    <span>Flask</span>
                                    <span>React</span>
                                    <span>HTML</span>
                                    <span>CSS</span>
                                    <span>JavaScript</span>
                                </div>

                            </div>


                            <div className="skill-row">

                                <span className="skill-number">05</span>

                                <div className="skill-category">
                                    <span className="skill-category-code">
                                        DATA
                                    </span>

                                    <h3>Database & Data Handling</h3>
                                </div>

                                <div className="skill-items">
                                    <span>SQLite</span>
                                    <span>SQL</span>
                                    <span>CSV Processing</span>
                                    <span>Data Preprocessing</span>
                                </div>

                            </div>


                            <div className="skill-row">

                                <span className="skill-number">06</span>

                                <div className="skill-category">
                                    <span className="skill-category-code">
                                        ENGINEERING
                                    </span>

                                    <h3>Engineering & Simulation</h3>
                                </div>

                                <div className="skill-items">
                                    <span>MATLAB</span>
                                    <span>Simulink</span>
                                    <span>Proteus</span>
                                    <span>Quartus</span>
                                    <span>Multisim</span>
                                </div>

                            </div>


                            <div className="skill-row">

                                <span className="skill-number">07</span>

                                <div className="skill-category">
                                    <span className="skill-category-code">
                                        DEVELOPMENT
                                    </span>

                                    <h3>Development Tools</h3>
                                </div>

                                <div className="skill-items">
                                    <span>Visual Studio</span>
                                    <span>Git</span>
                                    <span>GitHub</span>
                                    <span>Jupyter Notebook</span>
                                </div>

                            </div>

                        </div>


                        {/* RIGHT SIDE — TECHNICAL PROFILE */}

                        <aside className="skills-summary">

                            <div className="skills-summary-header">
                                <span>TECHNICAL PROFILE</span>
                                <span>SYS.05</span>
                            </div>


                            <div className="skills-summary-content">

                                <div className="summary-block">

                                    <span className="summary-label">
                                        PRIMARY LANGUAGE
                                    </span>

                                    <strong>Python</strong>

                                    <p>
                                        Applied across machine learning, engineering
                                        applications and web development.
                                    </p>

                                </div>


                                <div className="summary-divider"></div>


                                <div className="summary-block">

                                    <span className="summary-label">
                                        CORE INTEREST
                                    </span>

                                    <strong>
                                        AI & Embedded Systems
                                    </strong>

                                    <p>
                                        Focused on combining intelligent software with
                                        engineering and hardware systems.
                                    </p>

                                </div>


                                <div className="summary-divider"></div>


                                <div className="summary-block">

                                    <span className="summary-label">
                                        DEVELOPMENT APPROACH
                                    </span>

                                    <strong>
                                        Hardware + Software
                                    </strong>

                                    <p>
                                        Experience developing systems involving sensors,
                                        microcontrollers, software interfaces and data-driven
                                        models.
                                    </p>

                                </div>


                                <div className="summary-status">

                                    <span className="status-dot"></span>

                                    MULTIDISCIPLINARY ENGINEERING PROFILE

                                </div>

                            </div>

                        </aside>

                    </div>

                </section>


                {/* =====================================================
                        06 — LANGUAGES
                    ====================================================== */}

                <section id="languages" className="portfolio-section languages-section">

                    <p className="section-code">
                        06 — COMMUNICATION CHANNELS
                    </p>

                    <div className="section-heading-row">

                        <div>
                            <h2>Languages</h2>

                            <p className="section-subtitle">
                                Languages used for academic, professional and everyday communication
                            </p>
                        </div>

                        <div className="status-tag">
                            COMMUNICATION PROFILE
                        </div>

                    </div>


                    <div className="languages-layout">

                        {/* ENGLISH */}

                        <article className="language-card">

                            <div className="language-header">

                                <div>
                                    <span className="language-number">
                                        01
                                    </span>

                                    <h3>English</h3>
                                </div>

                                <span className="language-level">
                                    FLUENT
                                </span>

                            </div>


                            <div className="language-body">

                                <p>
                                    Used extensively throughout university studies,
                                    engineering documentation, presentations, project
                                    development and professional communication.
                                </p>


                                <div className="language-meter">

                                    <div className="language-meter-label">

                                        <span>PROFICIENCY</span>

                                        <span>FLUENT</span>

                                    </div>

                                    <div className="language-track">

                                        <div
                                            className="language-fill"
                                            style={{ width: '100%' }}
                                        ></div>

                                    </div>

                                </div>

                            </div>

                        </article>


                        {/* BANGLA */}

                        <article className="language-card">

                            <div className="language-header">

                                <div>
                                    <span className="language-number">
                                        02
                                    </span>

                                    <h3>Bangla</h3>
                                </div>

                                <span className="language-level">
                                    FLUENT
                                </span>

                            </div>


                            <div className="language-body">

                                <p>
                                    Fluent communication ability supporting clear
                                    interpersonal interaction and communication across
                                    different social and professional contexts.
                                </p>


                                <div className="language-meter">

                                    <div className="language-meter-label">

                                        <span>PROFICIENCY</span>

                                        <span>FLUENT</span>

                                    </div>

                                    <div className="language-track">

                                        <div
                                            className="language-fill"
                                            style={{ width: '100%' }}
                                        ></div>

                                    </div>

                                </div>

                            </div>

                        </article>

                    </div>


                    <div className="language-summary">

                        <div className="language-summary-code">
                            COMMUNICATION CAPABILITY
                        </div>

                        <p>
                            Fluent communication in English and Bangla supports academic
                            collaboration, professional interaction, technical presentation
                            and engagement with people from different backgrounds.
                        </p>

                    </div>

                </section>


                {/* =====================================================
                    07 — SWOT
                ====================================================== */}

                <section id="swot" className="portfolio-section swot-section">

                    <p className="section-code">
                        07 — SELF DIAGNOSTIC
                    </p>

                    <div className="section-heading-row">

                        <div>
                            <h2>SWOT Analysis</h2>

                            <p className="section-subtitle">
                                Critical reflection on professional development,
                                technical capability and lifelong learning readiness
                            </p>
                        </div>

                        <div className="status-tag">
                            SELF ASSESSMENT
                        </div>

                    </div>


                    <div className="swot-grid">

                        {/* =====================================================
                                STRENGTHS
                            ====================================================== */}

                        <article className="swot-card strength-card">

                            <div className="swot-card-header">

                                <div>
                                    <span className="swot-code">S / 01</span>
                                    <h3>Strengths</h3>
                                </div>

                                <span className="swot-symbol">+</span>

                            </div>


                            <div className="swot-items">

                                <div className="swot-item">

                                    <span className="swot-item-number">01</span>

                                    <div>
                                        <h4>Multidisciplinary Technical Foundation</h4>

                                        <p>
                                            Experience across programming, machine learning,
                                            embedded systems and web development enables me to
                                            approach engineering problems from both hardware
                                            and software perspectives.
                                        </p>
                                    </div>

                                </div>


                                <div className="swot-item">

                                    <span className="swot-item-number">02</span>

                                    <div>
                                        <h4>Applied Engineering Problem Solving</h4>

                                        <p>
                                            Academic projects involving predictive tool wear
                                            monitoring, secure web systems and Arduino-based
                                            automation have strengthened my ability to convert
                                            engineering requirements into practical solutions.
                                        </p>
                                    </div>

                                </div>


                                <div className="swot-item">

                                    <span className="swot-item-number">03</span>

                                    <div>
                                        <h4>Independent Technical Learning</h4>

                                        <p>
                                            Working with machine learning frameworks, sensor
                                            data and unfamiliar development tools has required
                                            continuous self-learning, experimentation and
                                            adaptation beyond classroom instruction.
                                        </p>
                                    </div>

                                </div>


                                <div className="swot-item">

                                    <span className="swot-item-number">04</span>

                                    <div>
                                        <h4>Practical Communication Experience</h4>

                                        <p>
                                            Internship experience involving STEM sessions,
                                            technical documentation and troubleshooting helped
                                            strengthen communication with users of different
                                            technical backgrounds.
                                        </p>
                                    </div>

                                </div>

                            </div>

                        </article>


                        {/* =====================================================
                                WEAKNESSES
                            ====================================================== */}

                        <article className="swot-card weakness-card">

                            <div className="swot-card-header">

                                <div>
                                    <span className="swot-code">W / 02</span>
                                    <h3>Weaknesses</h3>
                                </div>

                                <span className="swot-symbol">−</span>

                            </div>


                            <div className="swot-items">

                                <div className="swot-item">

                                    <span className="swot-item-number">01</span>

                                    <div>
                                        <h4>Limited Full-Time Industry Exposure</h4>

                                        <p>
                                            Most of my engineering experience has been gained
                                            through academic projects and internship work,
                                            meaning further exposure to large-scale industrial
                                            systems and professional engineering workflows is
                                            still required.
                                        </p>
                                    </div>

                                </div>


                                <div className="swot-item">

                                    <span className="swot-item-number">02</span>

                                    <div>
                                        <h4>Need for Deeper Technical Specialisation</h4>

                                        <p>
                                            My broad exposure to several engineering
                                            technologies is useful, but greater depth is still
                                            needed in selected areas such as AI-driven
                                            engineering, embedded systems and industrial
                                            automation.
                                        </p>
                                    </div>

                                </div>


                                <div className="swot-item">

                                    <span className="swot-item-number">03</span>

                                    <div>
                                        <h4>Professional Decision-Making Experience</h4>

                                        <p>
                                            More experience is needed in making engineering
                                            decisions where technical performance must be
                                            balanced against cost, safety, sustainability,
                                            legal requirements and stakeholder expectations.
                                        </p>
                                    </div>

                                </div>


                                <div className="swot-item">

                                    <span className="swot-item-number">04</span>

                                    <div>
                                        <h4>Communication of Complex Technical Work</h4>

                                        <p>
                                            I continue to develop my ability to communicate
                                            complex technical concepts concisely to both
                                            engineering and non-technical audiences.
                                        </p>
                                    </div>

                                </div>

                            </div>

                        </article>


                        {/* =====================================================
                                OPPORTUNITIES
                            ====================================================== */}

                        <article className="swot-card opportunity-card">

                            <div className="swot-card-header">

                                <div>
                                    <span className="swot-code">O / 03</span>
                                    <h3>Opportunities</h3>
                                </div>

                                <span className="swot-symbol">↗</span>

                            </div>


                            <div className="swot-items">

                                <div className="swot-item">

                                    <span className="swot-item-number">01</span>

                                    <div>
                                        <h4>Growth of AI in Engineering</h4>

                                        <p>
                                            Increasing adoption of artificial intelligence,
                                            predictive maintenance and data-driven engineering
                                            creates opportunities to extend the machine
                                            learning experience developed through my final
                                            year project.
                                        </p>
                                    </div>

                                </div>


                                <div className="swot-item">

                                    <span className="swot-item-number">02</span>

                                    <div>
                                        <h4>Industry 4.0 & Intelligent Systems</h4>

                                        <p>
                                            The integration of sensors, embedded systems,
                                            automation and intelligent software provides a
                                            suitable pathway for combining my current technical
                                            interests.
                                        </p>
                                    </div>

                                </div>


                                <div className="swot-item">

                                    <span className="swot-item-number">03</span>

                                    <div>
                                        <h4>Continuous Professional Development</h4>

                                        <p>
                                            Professional certifications, technical training,
                                            industry experience and postgraduate study provide
                                            opportunities to strengthen specialist knowledge
                                            after graduation.
                                        </p>
                                    </div>

                                </div>


                                <div className="swot-item">

                                    <span className="swot-item-number">04</span>

                                    <div>
                                        <h4>Cross-Disciplinary Engineering Roles</h4>

                                        <p>
                                            My combination of software, hardware and AI
                                            experience creates opportunities in areas such as
                                            embedded intelligence, automation, testing,
                                            technical support and engineering technology.
                                        </p>
                                    </div>

                                </div>

                            </div>

                        </article>


                        {/* =====================================================
                                THREATS
                            ====================================================== */}

                        <article className="swot-card threat-card">

                            <div className="swot-card-header">

                                <div>
                                    <span className="swot-code">T / 04</span>
                                    <h3>Threats</h3>
                                </div>

                                <span className="swot-symbol">!</span>

                            </div>


                            <div className="swot-items">

                                <div className="swot-item">

                                    <span className="swot-item-number">01</span>

                                    <div>
                                        <h4>Rapid Technological Change</h4>

                                        <p>
                                            Engineering tools and AI technologies evolve
                                            quickly, creating the risk that current knowledge
                                            may become outdated without continuous learning and
                                            professional development.
                                        </p>
                                    </div>

                                </div>


                                <div className="swot-item">

                                    <span className="swot-item-number">02</span>

                                    <div>
                                        <h4>Competitive Graduate Employment Market</h4>

                                        <p>
                                            Graduate engineering roles are competitive,
                                            increasing the importance of practical experience,
                                            demonstrable projects and continuous improvement of
                                            technical and professional skills.
                                        </p>
                                    </div>

                                </div>


                                <div className="swot-item">

                                    <span className="swot-item-number">03</span>

                                    <div>
                                        <h4>Ethical & Security Risks</h4>

                                        <p>
                                            Increasing reliance on connected and AI-driven
                                            systems introduces cybersecurity, privacy,
                                            reliability and ethical risks that engineers must
                                            understand when designing technological solutions.
                                        </p>
                                    </div>

                                </div>


                                <div className="swot-item">

                                    <span className="swot-item-number">04</span>

                                    <div>
                                        <h4>Overdependence on Automated Tools</h4>

                                        <p>
                                            Greater availability of AI-assisted engineering
                                            tools may reduce fundamental problem-solving skills
                                            if they are used without independent verification,
                                            critical thinking and engineering judgement.
                                        </p>
                                    </div>

                                </div>

                            </div>

                        </article>

                    </div>


                    {/* =====================================================
                            DEVELOPMENT RESPONSE
                        ====================================================== */}

                    <div className="swot-response">

                        <div className="swot-response-heading">

                            <span className="response-code">
                                DEVELOPMENT STRATEGY
                            </span>

                            <span className="response-status">
                                CONTINUOUS IMPROVEMENT
                            </span>

                        </div>


                        <div className="response-grid">

                            <div>

                                <span className="response-number">01</span>

                                <h4>Strengthen Specialisation</h4>

                                <p>
                                    Continue developing deeper expertise in AI, embedded
                                    systems and intelligent engineering applications through
                                    projects, training and practical experience.
                                </p>

                            </div>


                            <div>

                                <span className="response-number">02</span>

                                <h4>Increase Industry Exposure</h4>

                                <p>
                                    Seek graduate-level engineering opportunities that provide
                                    exposure to professional workflows, industrial standards
                                    and multidisciplinary engineering environments.
                                </p>

                            </div>


                            <div>

                                <span className="response-number">03</span>

                                <h4>Maintain Ethical Awareness</h4>

                                <p>
                                    Consider safety, security, privacy, sustainability and
                                    professional responsibility when evaluating engineering
                                    solutions.
                                </p>

                            </div>


                            <div>

                                <span className="response-number">04</span>

                                <h4>Commit to Lifelong Learning</h4>

                                <p>
                                    Continuously update technical knowledge through
                                    independent learning, professional development and
                                    engagement with emerging engineering technologies.
                                </p>

                            </div>

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    08 — PLO EVALUATION
                ====================================================== */}

                <section id="evaluation" className="portfolio-section evaluation-section">

                    <p className="section-code">
                        08 — PERFORMANCE REVIEW
                    </p>

                    <div className="section-heading-row">

                        <div>
                            <h2>PLO Attainment & Evaluation</h2>

                            <p className="section-subtitle">
                                Critical evaluation of programme learning outcome attainment,
                                supporting evidence and professional development priorities
                            </p>
                        </div>

                        <div className="status-tag">
                            PROVISIONAL DATA
                        </div>

                    </div>


                    {/* ==============================
                            PERFORMANCE SUMMARY
                        ============================== */}

                    <div className="evaluation-summary">

                        <div className="evaluation-summary-main">

                            <span className="evaluation-label">
                                PERFORMANCE OVERVIEW
                            </span>

                            <h3>
                                Engineering Competency Assessment
                            </h3>

                            <p>
                                The current Programme Learning Outcome profile demonstrates
                                strong attainment across technical tools, investigation,
                                engineering design, communication, teamwork and lifelong
                                learning. The provisional results also identify Engineering
                                Knowledge, Problem Analysis and Engineering Responsibilities
                                as areas requiring further development and evidence.
                            </p>

                        </div>


                        <div className="evaluation-stat">

                            <span>OUTCOMES</span>
                            <strong>12</strong>
                            <small>ASSESSED</small>

                        </div>


                        <div className="evaluation-stat">

                            <span>ATTAINED</span>
                            <strong>
                                {ploEvaluation.filter(item => item.score >= 1).length}
                            </strong>
                            <small>CURRENT PROFILE</small>

                        </div>


                        <div className="evaluation-stat">

                            <span>DEVELOPING</span>
                            <strong>
                                {ploEvaluation.filter(item => item.score > 0 && item.score < 1).length}
                            </strong>
                            <small>IMPROVEMENT AREAS</small>

                        </div>

                    </div>


                    {/* ==============================
                            PRIORITY DEVELOPMENT
                        ============================== */}

                    <div className="priority-panel">

                        <div className="priority-header">

                            <span>PRIORITY DEVELOPMENT MATRIX</span>

                            <span>SYS.EVAL / 08</span>

                        </div>


                        <div className="priority-grid">

                            <div className="priority-item priority-critical">

                                <span className="priority-code">PLO1 / 0.000</span>

                                <h4>Engineering Knowledge</h4>

                                <p>
                                    Priority should be given to demonstrating stronger
                                    application of mathematics, science and engineering
                                    principles within documented complex engineering
                                    problem-solving activities.
                                </p>

                                <div className="priority-status">
                                    HIGH PRIORITY
                                </div>

                            </div>


                            <div className="priority-item">

                                <span className="priority-code">PLO2 / 0.375</span>

                                <h4>Problem Analysis</h4>

                                <p>
                                    Further development should focus on structured problem
                                    decomposition, evaluation of constraints and stronger
                                    engineering justification when analysing complex
                                    technical problems.
                                </p>

                                <div className="priority-status">
                                    DEVELOPING
                                </div>

                            </div>


                            <div className="priority-item">

                                <span className="priority-code">PLO8 / 0.667</span>

                                <h4>Engineering Responsibilities</h4>

                                <p>
                                    Greater exposure to safety, legal, social, cultural and
                                    professional requirements will strengthen decision-making
                                    within real engineering environments.
                                </p>

                                <div className="priority-status">
                                    DEVELOPING
                                </div>

                            </div>

                        </div>

                    </div>


                    {/* ==============================
                            DETAILED PLO EVALUATION
                        ============================== */}

                    <div className="evaluation-table-header">

                        <span>#</span>
                        <span>OUTCOME / EVALUATION</span>
                        <span>ATTAINMENT</span>

                    </div>


                    <div className="evaluation-list">

                        {ploEvaluation.map((item, index) => (

                            <article className="evaluation-row" key={item.id}>

                                <div className="evaluation-index">
                                    {String(index + 1).padStart(2, '0')}
                                </div>


                                <div className="evaluation-content">

                                    <div className="evaluation-title-row">

                                        <div>

                                            <span className="evaluation-plo">
                                                {item.id}
                                            </span>

                                            <h3>
                                                {item.name}
                                            </h3>

                                        </div>


                                        <span
                                            className={
                                                item.score >= 1
                                                    ? 'evaluation-status attained'
                                                    : item.score > 0
                                                        ? 'evaluation-status developing'
                                                        : 'evaluation-status priority'
                                            }
                                        >
                                            {item.status}
                                        </span>

                                    </div>


                                    <p className="evaluation-text">
                                        {item.evaluation}
                                    </p>


                                    <div className="evaluation-details">

                                        <div>

                                            <span className="detail-label">
                                                SUPPORTING EVIDENCE
                                            </span>

                                            <p>
                                                {item.evidence}
                                            </p>

                                        </div>


                                        <div>

                                            <span className="detail-label">
                                                DEVELOPMENT ACTION
                                            </span>

                                            <p>
                                                {item.action}
                                            </p>

                                        </div>

                                    </div>

                                </div>


                                <div className="evaluation-score">

                                    <strong>
                                        {item.score.toFixed(3)}
                                    </strong>

                                    <span>
                                        / 1.000
                                    </span>

                                    <div className="evaluation-meter">

                                        <div
                                            className="evaluation-meter-fill"
                                            style={{
                                                width: `${Math.min(item.score * 100, 100)}%`
                                            }}
                                        ></div>

                                    </div>

                                </div>

                            </article>

                        ))}

                    </div>


                    {/* ==============================
                            OVERALL REFLECTION
                        ============================== */}

                    <div className="overall-evaluation">

                        <div className="overall-evaluation-code">
                            OVERALL EVALUATION
                        </div>


                        <div className="overall-evaluation-content">

                            <h3>
                                From Academic Competency to Professional Readiness
                            </h3>

                            <p>
                                The current PLO profile indicates that my strongest areas are
                                associated with practical engineering tools, investigation,
                                solution development, communication, teamwork and independent
                                learning. These capabilities have been developed through
                                academic coursework, engineering projects, final year research
                                and internship experience.
                            </p>

                            <p>
                                However, the lower provisional attainment recorded for
                                Engineering Knowledge, Problem Analysis and Engineering
                                Responsibilities identifies clear areas for further
                                development. Moving towards professional engineering practice
                                will therefore require stronger documentation of theoretical
                                engineering knowledge, more structured analysis of complex
                                problems and greater exposure to professional standards,
                                safety, legal responsibilities and real industrial
                                decision-making.
                            </p>

                            <p>
                                Continuous professional development will remain important as
                                engineering technologies evolve. I intend to strengthen these
                                areas through practical industry experience, independent
                                learning, professional training and continued engagement with
                                emerging technologies such as artificial intelligence,
                                intelligent embedded systems and automation.
                            </p>

                        </div>

                    </div>


                    <div className="provisional-note">

                        <span>●</span>

                        <p>
                            The attainment values displayed in this section are provisional
                            and will be updated when the final Programme Learning Outcome
                            results are available.
                        </p>

                    </div>

                </section>

            </main>


            {/* =====================================================
                EMAIL COPY TOAST
            ====================================================== */}

            {showEmailToast && (
                <div className="email-toast">

                    <span className="toast-icon">
                        ✓
                    </span>

                    <div>

                        <span className="toast-title">
                            EMAIL COPIED
                        </span>

                        <span className="toast-message">
                            noor.rashid.2003@gmail.com
                        </span>

                    </div>

                </div>
            )}


        </div>
    )
}

export default App



