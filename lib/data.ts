import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'zeedan345@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Zeedan, I am reaching out to you because...',

    oldPortfolio: '',
    upworkProfile: 'https://www.linkedin.com/in/zeedan/',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/Zeedan345' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/zeedan/' },
    { name: 'facebook', url: 'https://www.facebook.com/profile.php?id=100014468970475' },
    { name: 'Old Version', url: GENERAL_INFO.oldPortfolio },
];

export const MY_STACK = {
    frontend: [
        {
            name: 'JavaScript',
            icon: '/logo/js.png',
        },
        {
            name: 'TypeScript',
            icon: '/logo/ts.png',
        },
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'Swift',
            icon: '/logo/swift.png',
        },
        {
            name: 'SwiftUI',
            icon: '/logo/swiftui.png',
        },
    ],
    backend: [
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
        {
            name: 'Python',
            icon: '/logo/python.png',
        },
        {
            name: 'C/C++',
            icon: '/logo/cpp.png',
        },
        {
            name: 'FastAPI',
            icon: '/logo/fastapi.png',
        },
    ],
    database: [
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg',
        },
        {
            name: 'PostgreSQL',
            icon: '/logo/postgreSQL.png',
        },
        {
            name: 'Firebase',
            icon: '/logo/firebase.png',
        },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'OpenCV',
            icon: '/logo/opencv.png',
        },
        {
            name: 'PyTorch',
            icon: '/logo/pytorch.png',
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'Ainash - AI-Powered Shell',
        slug: 'ainash',
        liveUrl: '',
        year: 2025,
        description: `
      An intelligent C-based shell that bridges natural language and system commands using the Gemini API. <br/> <br/>
      
      Key Features:<br/>
      <ul>
        <li> Natural Language Processing: Translates conversational commands into executable shell operations</li>
        <li> REPL Interface: Interactive read-eval-print loop for seamless command execution</li>
        <li> Process Management: Advanced forking mechanisms for efficient process handling</li>
        <li> Security First: Built-in validation checks for AI-generated commands</li>
        <li> API Integration: Seamless HTTP/JSON communication with Gemini API</li>
      </ul><br/>
      
      Technical Highlights:
      <ul>
        <li>Implemented low-level system programming in C for optimal performance</li>
        <li>Designed robust error handling and command validation pipeline</li>
        <li>Created custom HTTP client for API communication</li>
        <li>Developed intelligent command parser with safety mechanisms</li>
      </ul>
      `,
        role: `
      Solo Developer <br/>
      Conceptualized and built the entire system:
      <ul>
        <li> Systems Programming: Developed core shell functionality in C</li>
        <li> API Integration: Implemented Gemini API communication layer</li>
        <li> Security: Built command validation and security checks</li>
        <li> Process Control: Engineered forking and process management</li>
        <li> Documentation: Created comprehensive usage guides</li>
      </ul>
      `,
        techStack: [
            'C',
            'System Programming',
            'Gemini API',
            'HTTP/JSON',
            'Process Forking',
            'REPL',
        ],
        sourceCode: 'https://github.com/Zeedan345',
        thumbnail: '/projects/thumbnail/ainash.webp',
        longThumbnail: '/projects/long/ainash.webp',
        images: [
            //'/projects/images/ainash-1.webp',
            //'/projects/images/ainash-2.webp',
        ],
    },
    {
        title: 'ECHO - Research Scheduling App',
        slug: 'echo',
        techStack: [
            'React',
            'Meteor',
            'MongoDB',
            'Node.js',
            'RBAC',
            'Real-time Sync',
        ],
        thumbnail: '/projects/thumbnail/echo.jpg',
        longThumbnail: '/projects/long/echo.jpg',
        images: [
            //'/projects/images/echo-1.png',
            //'/projects/images/echo-2.png',
            //'/projects/images/echo-3.png',
        ],
        sourceCode: 'https://github.com/Zeedan345',
        liveUrl: '',
        year: 2024,
        description: `ECHO is an enterprise-grade research scheduling platform designed to streamline clinical workflows across government agencies. Serving 100+ doctors, it offers intelligent scheduling algorithms, role-based access control, and real-time synchronization. <br/><br/>
        
        Key Features:<br/>
        <ul>
            <li> Intelligent Scheduling: AI-powered algorithms reduced workflow bottlenecks by 40%</li>
            <li> Enterprise Authentication: Robust RBAC system for secure access management</li>
            <li> Real-time Sync: Optimized protocols achieving 25% faster load times</li>
            <li> Multi-Agency Support: Scalable architecture serving government healthcare facilities</li>
            <li> Database Optimization: Advanced query optimization for high-performance data retrieval</li>
        </ul>`,
        role: `Full-Stack Architect <br/>
        Led the complete platform development:
        <ul>
            <li> Architecture: Designed scalable full-stack infrastructure with Meteor and MongoDB</li>
            <li> Performance: Optimized database queries and real-time sync protocols</li>
            <li> Security: Implemented enterprise authentication and RBAC</li>
            <li> Algorithms: Developed intelligent scheduling algorithms</li>
            <li> Impact: Reduced workflow bottlenecks by 40% and improved load times by 25%</li>
        </ul>`,
    },
    {
        title: 'KineTrack - AI Physical Therapy',
        slug: 'kinetrack',
        techStack: [
            'Swift',
            'FastAPI',
            'MediaPipe',
            'Gemini Vision API',
            'ElevenLabs',
            'WebSockets',
        ],
        thumbnail: '/projects/thumbnail/kinetrack.png',
        longThumbnail: '/projects/long/kinetrack.png',
        images: [
            '/projects/images/kinetrack-1.png',
            '/projects/images/kinetrack-2.png',
            '/projects/images/kinetrack-3.png',
        ],
        sourceCode: 'https://github.com/Zeedan345',
        liveUrl: '',
        year: 2024,
        description: `KineTrack is an innovative iOS application that revolutionizes physical therapy through AI-powered posture correction and real-time feedback. Using advanced computer vision and natural language processing, it provides personalized coaching for patients. <br/><br/>
        
        Key Features:<br/>
        <ul>
            <li> Real-time Posture Analysis: MediaPipe-powered pose detection with live feedback</li>
            <li> AI Coaching: Gemini Vision API integration for intelligent motion guidance</li>
            <li> Voice Feedback: ElevenLabs text-to-speech for natural audio coaching</li>
            <li> Live Communication: WebSocket implementation for instant feedback delivery</li>
            <li> Native iOS: Built with Swift for optimal performance and user experience</li>
        </ul>`,
        role: `Mobile & Backend Developer <br/>
        Developed end-to-end solution:
        <ul>
            <li> iOS Development: Built native app with Swift for seamless user experience</li>
            <li> Backend: Developed FastAPI server for real-time processing</li>
            <li> AI Integration: Implemented Gemini Vision API for motion analysis</li>
            <li> Audio Pipeline: Integrated ElevenLabs for natural voice feedback</li>
            <li> Real-time Systems: Built WebSocket infrastructure for live coaching</li>
        </ul>`,
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Software Engineering Intern',
        company: 'Taebi Lab, Mississippi State University',
        duration: 'May 2025 - Present',
        description: [
            'Developed cross-platform iOS app for neonatal cardiovascular monitoring with Swift, SwiftUI, and UIKit',
            'Built high-throughput real-time computer vision pipeline with GPU acceleration for critical healthcare application',
            'Achieved 70% performance improvement through Objective-C/OpenCV optimization for QR and SCG processing',
            'Engineered secure cloud-enabled medical data system with AES-256 encryption and Firebase synchronization',
        ],
    },
    {
        title: 'Undergraduate Research Assistant',
        company: 'Dept. Aerospace Engineering, Mississippi State University',
        duration: 'Nov 2024 - Present',
        description: [
            'Awarded 1st Place in ERDC Special Area Competition for Autonomous Robotic Systems',
            'Pioneered hybrid ML architecture combining Koopman operator theory with GAN and variational autoencoders',
            'Developed high-fidelity quadcopter simulation with 12-state dynamics using Runge-Kutta 4th order method',
            'Implemented attention-based graph neural networks for real-time state prediction in autonomous systems',
        ],
    },
    {
        title: 'Full Stack Intern',
        company: 'Social Science Research Centre, Mississippi State University',
        duration: 'Jan 2024 - May 2025',
        description: [
            'Enhanced critical research infrastructure supporting 82 counties across Mississippi',
            'Architected 12 advanced data management features for TRAPS platform using JavaScript/CoffeeScript',
            'Optimized legacy codebase reducing map load times by 50% and overall app speed by 15%',
            'Accelerated ML inference by 50% and lifted retrieval accuracy by 16% through PyTorch transformer fine-tuning',
        ],
    },
];