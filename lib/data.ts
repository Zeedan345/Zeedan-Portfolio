import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'zeedan345@gmail.com',
    siteUrl: 'https://zeedankhan.com',
    location: 'Starkville, Mississippi',
    emailSubject: "Let's build something together",
    emailBody: 'Hi Zeedan, I am reaching out to you because...',
};

export const SOCIAL_LINKS = [
    { name: 'GitHub', url: 'https://github.com/Zeedan345' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/zeedan/' },
];

export const EDUCATION = {
    school: 'Mississippi State University',
    degree: 'BS in Computer Science',
    dates: 'Aug 2023 – May 2027 (expected)',
    gpa: '4.0 / 4.0',
    coursework: [
        'Machine Learning', 'Algorithms', 'Data Structures', 'Operating Systems',
        'Numerical Analysis', 'Linear Algebra', 'VXR Development',
    ],
};

export const MY_STACK = {
    'Languages': ['Python', 'C++', 'C', 'Swift', 'Objective-C', 'Java', 'JavaScript', 'TypeScript', 'C#'],
    'Apple': ['SwiftUI', 'UIKit', 'Xcode', 'CoreML', 'Combine', 'AVFoundation', 'ARKit', 'CryptoKit', 'CoreMotion', 'Swift Concurrency'],
    'ML & verification': ['PyTorch', 'LangGraph', 'ONNX', 'VNN-LIB', 'alpha-beta-CROWN', 'Marabou', 'OpenCV', 'MediaPipe'],
    'Backend & tools': ['React', 'Node.js', 'FastAPI', 'REST / WebSockets', 'MongoDB', 'PostgreSQL', 'Firebase', 'Git', 'Linux / Unix'],
};

export const PROJECTS: IProject[] = [
    {
        name: 'Ainash',
        title: 'Ainash — AI-Powered Shell',
        slug: 'ainash',
        year: 2025,
        summary: 'A C shell that turns natural language into commands, with validation before execution.',
        description: '<p>Ainash connects natural-language requests to a C-based shell through the Gemini API. It combines an interactive REPL with process forking and an HTTP/JSON integration.</p><p>A validation layer screens AI-generated commands for destructive operations before execution.</p>',
        role: 'Built the shell, Gemini API integration, process management, and command-validation layer.',
        techStack: ['C', 'Systems Programming', 'Gemini API', 'HTTP/JSON'],
        sourceCode: 'https://github.com/Zeedan345/Ainash',
        images: [],
    },
    {
        name: 'ECHO',
        title: 'ECHO — Research Scheduling App',
        slug: 'echo',
        year: 2024,
        summary: 'Research scheduling for 100+ doctors, with secure access and 25% faster load times.',
        description: '<p>ECHO is a full-stack research scheduling platform serving more than 100 doctors across government agencies. Enterprise authentication and role-based access control support access across teams.</p><p>Optimized database queries and real-time synchronization improved load times by 25%.</p>',
        role: 'Architected the full-stack platform, authentication and access controls, database queries, and real-time synchronization.',
        techStack: ['React', 'Meteor', 'MongoDB', 'Node.js'],
        images: [],
    },
    {
        name: 'KineTrack',
        title: 'KineTrack — AI Physical Therapy',
        slug: 'kinetrack',
        year: 2024,
        summary: 'An iOS movement coach with real-time posture feedback and spoken corrections.',
        description: '<p>KineTrack helps people correct their posture during exercise. The iOS app streams camera frames over WebSockets to a FastAPI backend for sub-second Gemini Vision feedback.</p><p>A MediaPipe pose-landmark pipeline tracks movement, while ElevenLabs text-to-speech delivers corrections mid-exercise.</p>',
        role: 'Developed the iOS app, FastAPI backend, pose-landmark pipeline, and real-time voice feedback.',
        techStack: ['Swift', 'FastAPI', 'MediaPipe', 'Gemini Vision', 'ElevenLabs', 'WebSockets'],
        sourceCode: 'https://github.com/Zeedan345/KineTrack',
        images: [
            '/projects/images/kinetrack-1.png',
            '/projects/images/kinetrack-2.png',
            '/projects/images/kinetrack-3.png',
        ],
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Research Intern · DAAD RISE Fellow',
        company: 'TU Dortmund',
        location: 'Dortmund, Germany',
        duration: 'May – Jul 2026',
        highlight: '350 fellows selected from 3,149 applicants',
        description: [
            'Researched LLM-guided formal verification of deep neural networks. Built a Python/LangGraph pipeline that turns natural-language requirements into VNN-LIB specifications for alpha-beta-CROWN and Marabou.',
            'Designed human-in-the-loop disambiguation and audited ONNX encodings, catching three soundness-breaking errors before they reached the verifier.',
        ],
    },
    {
        title: 'Software Engineering Intern',
        company: 'Taebi Lab · Mississippi State University',
        location: 'Starkville, MS',
        duration: 'May – Nov 2025',
        highlight: '70% faster real-time tracking',
        description: [
            'Developed an iOS app for neonatal cardiovascular monitoring with Swift, SwiftUI, and UIKit, working alongside a clinical team.',
            'Accelerated QR and SCG tracking by 70% with Objective-C/OpenCV and unit-tested signal processing. Built the API and validation pipeline with AES-256 encryption, role-based access, and Firebase sync.',
        ],
    },
    {
        title: 'Undergraduate Research Assistant',
        company: 'Aerospace Engineering · Mississippi State University',
        location: 'Starkville, MS',
        duration: 'Nov 2024 – May 2025',
        highlight: '1st place · ERDC Autonomous Robotic Systems competition',
        description: [
            'Built a hybrid ML architecture combining Koopman operator theory, GANs, and variational autoencoders, trained on 12-state flight dynamics across 500,000 trajectories.',
            'Implemented attention-based graph neural networks in PyTorch for real-time trajectory state prediction.',
        ],
    },
    {
        title: 'Full Stack Intern',
        company: 'Social Science Research Centre · Mississippi State University',
        location: 'Starkville, MS',
        duration: 'Jan 2024 – May 2025',
        highlight: 'Research infrastructure serving all 82 Mississippi counties',
        description: [
            'Built distributed data-management features for TRAPS and designed API contracts and MongoDB/PostgreSQL schemas. A TypeScript refactor cut map load times by 50%.',
            'Fine-tuned a PyTorch transformer for table extraction and added semantic search, accelerating ML inference by 50% and improving retrieval accuracy by 16%.',
        ],
    },
];
