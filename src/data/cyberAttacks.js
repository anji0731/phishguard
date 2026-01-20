import {
    Fish, Bug, Lock, Wifi, Key, Users, Mail, Smartphone
} from 'lucide-react'

export const cyberAttacks = [
    {
        id: 'phishing',
        name: 'Phishing Attacks',
        icon: Fish,
        color: '#ef4444',
        severity: 'high',
        shortDescription: 'Fake websites and emails that trick you into giving away your passwords and personal information.',

        // YouTube video about phishing (educational)
        videoId: 'XBkzBrXlle0',
        videoTitle: 'What is Phishing? Learn How to Protect Yourself',

        whatIsIt: `Phishing is like a fishing trip, but instead of catching fish, bad people try to catch YOUR personal information!

Imagine someone dressed up as your teacher asking for your homework answers. That's phishing - someone pretending to be someone else (like a bank, Amazon, or Facebook) to steal your information.

These attackers create fake copies of real websites or send fake emails that look exactly like the real thing. When you enter your password or credit card number, they steal it!`,

        howItHappens: [
            {
                title: 'Create Fake Website',
                description: 'Attacker creates a website that looks exactly like Amazon, Google, or your bank',
                icon: '🎭'
            },
            {
                title: 'Send Bait Message',
                description: 'They send an email or SMS with scary text like "Your account will be closed!"',
                icon: '📧'
            },
            {
                title: 'Victim Clicks Link',
                description: 'You click the link thinking it\'s real and land on the fake website',
                icon: '🖱️'
            },
            {
                title: 'Enter Credentials',
                description: 'You enter your username and password on the fake site',
                icon: '🔑'
            },
            {
                title: 'Data Stolen',
                description: 'The attacker now has your login details and can access your real account',
                icon: '💀'
            }
        ],

        realExample: {
            title: 'Netflix Phishing Scam (2020)',
            description: 'Millions of people received emails that looked exactly like Netflix saying "Your payment failed, update your card now!" The email had the Netflix logo, colors, and formatting. When people clicked the link, they were taken to a fake Netflix site where hackers stole their credit card information.',
            stats: [
                { value: '300K+', label: 'Victims' },
                { value: '$5M+', label: 'Money Lost' },
                { value: '50+', label: 'Countries' }
            ]
        },

        whyDangerous: [
            'Attackers can steal your money from bank accounts',
            'They can take over your social media accounts',
            'Your personal photos and messages can be stolen',
            'They can pretend to be you and scam your friends and family',
            'Your identity can be stolen and used for crimes'
        ],

        howToStaySafe: [
            'Always check the website address (URL) carefully - look for misspellings like "amaz0n" instead of "amazon"',
            'Never click links in emails - instead, type the website address yourself',
            'Look for the padlock icon (🔒) in your browser address bar',
            'If an email sounds scary or urgent, it\'s probably fake',
            'When in doubt, call the company directly using their official phone number',
            'Enable two-factor authentication on all important accounts'
        ],

        phishGuardDetection: 'PhishGuard checks if a website URL contains suspicious patterns, fake brand names, and compares it against known phishing techniques. We analyze the domain age, SSL certificate, and URL structure to detect fake sites.'
    },

    {
        id: 'malware',
        name: 'Malware Attacks',
        icon: Bug,
        color: '#8b5cf6',
        severity: 'high',
        shortDescription: 'Harmful software that can damage your computer, steal your files, or spy on everything you do.',

        videoId: 'n8mbzU0X2nQ',
        videoTitle: 'What is Malware? Viruses, Trojans & More Explained',

        whatIsIt: `Malware is short for "malicious software" - it's like a virus that makes your computer sick!

Just like how germs can make you sick if you touch something dirty, malware can infect your computer when you download something bad or visit a dangerous website.

Malware can do many bad things: it can delete your files, slow down your computer, show you annoying ads everywhere, or secretly watch everything you type (including passwords!).`,

        howItHappens: [
            {
                title: 'Tempting Download',
                description: 'You find a free game, movie, or cracked software on an untrusted website',
                icon: '🎮'
            },
            {
                title: 'Hidden Payload',
                description: 'Inside that download is hidden malware code',
                icon: '📦'
            },
            {
                title: 'Installation',
                description: 'When you run the program, malware secretly installs itself on your computer',
                icon: '💻'
            },
            {
                title: 'Background Activity',
                description: 'Malware starts running secretly without you knowing',
                icon: '👁️'
            },
            {
                title: 'Damage Done',
                description: 'Your computer becomes slow, shows popups, or your files get deleted',
                icon: '💥'
            }
        ],

        realExample: {
            title: 'ILOVEYOU Virus (2000)',
            description: 'One of the most famous malware attacks ever! It came as an email with the subject "ILOVEYOU" and an attachment called "LOVE-LETTER-FOR-YOU". When people opened it (thinking it was a love letter!), it destroyed their files and sent itself to everyone in their email contacts.',
            stats: [
                { value: '50M', label: 'Computers Infected' },
                { value: '$15B', label: 'Total Damage' },
                { value: '10%', label: 'of Internet' }
            ]
        },

        whyDangerous: [
            'Can delete all your precious photos and files forever',
            'Steals your passwords and bank information',
            'Lets hackers control your computer remotely',
            'Uses your computer to attack other people',
            'Can destroy your computer completely',
            'Spreads to other devices on your network'
        ],

        howToStaySafe: [
            'Only download software from official websites and app stores',
            'Never open email attachments from unknown people',
            'Keep your antivirus software updated and running',
            'Don\'t click on pop-up ads that say "You won!" or "Your computer is infected!"',
            'Keep your operating system and apps updated',
            'Be careful with USB drives from others - they can carry malware'
        ],

        phishGuardDetection: 'PhishGuard identifies websites known to distribute malware by checking their reputation against threat databases and analyzing suspicious download links.'
    },

    {
        id: 'ransomware',
        name: 'Ransomware',
        icon: Lock,
        color: '#f59e0b',
        severity: 'high',
        shortDescription: 'Attackers lock all your files and demand money to unlock them, like digital kidnappers.',

        videoId: 'eK48A-MJQxU',
        videoTitle: 'How Ransomware Works - Complete Explanation',

        whatIsIt: `Ransomware is like a bully who steals your homework and says "Give me money or I'll never give it back!"

When ransomware infects your computer, it LOCKS all your files - photos, documents, everything! You can see the files but cannot open them. Then it shows a scary message demanding money (usually in Bitcoin cryptocurrency) to unlock your files.

Even if you pay, there's no guarantee you'll get your files back. And paying encourages criminals to attack more people!`,

        howItHappens: [
            {
                title: 'Initial Infection',
                description: 'You click on a malicious email attachment or download infected software',
                icon: '📩'
            },
            {
                title: 'File Scanning',
                description: 'Ransomware scans your computer for important files - photos, documents, videos',
                icon: '🔍'
            },
            {
                title: 'Encryption',
                description: 'It encrypts (locks) all your files with a secret code only the attacker knows',
                icon: '🔐'
            },
            {
                title: 'Ransom Demand',
                description: 'A scary message appears demanding payment (usually $300-$1000 in Bitcoin)',
                icon: '💰'
            },
            {
                title: 'Countdown Timer',
                description: 'A timer threatens to delete files if you don\'t pay in time',
                icon: '⏰'
            }
        ],

        realExample: {
            title: 'WannaCry Attack (2017)',
            description: 'This was like a digital pandemic! It spread to over 200,000 computers in 150 countries in just ONE DAY. Hospitals in the UK had to cancel surgeries because they couldn\'t access patient files. The attackers demanded $300 in Bitcoin from each victim.',
            stats: [
                { value: '200K+', label: 'Computers Hit' },
                { value: '150', label: 'Countries' },
                { value: '$4B', label: 'Total Damage' }
            ]
        },

        whyDangerous: [
            'You lose access to ALL your files - photos, homework, everything',
            'Even paying money doesn\'t guarantee you get files back',
            'Hospitals, schools, and businesses have been forced to shut down',
            'Can spread to other computers on the same network',
            'Some ransomware also steals your files before locking them',
            'Recovery can take weeks or months, even with backups'
        ],

        howToStaySafe: [
            'Backup your important files regularly to an external drive or cloud',
            'Keep your backup drive disconnected when not backing up',
            'Never open attachments from unknown senders',
            'Keep all your software and Windows/Mac updated',
            'Use a good antivirus and keep it updated',
            'If infected, DO NOT PAY - report to authorities and seek professional help'
        ],

        phishGuardDetection: 'PhishGuard helps identify malicious download links and phishing emails that commonly deliver ransomware to victims.'
    },

    {
        id: 'ddos',
        name: 'DDoS Attacks',
        icon: Wifi,
        color: '#06b6d4',
        severity: 'medium',
        shortDescription: 'Attackers flood websites with so much traffic that real users cannot access them.',

        videoId: 'ilhGh9CEIwM',
        videoTitle: 'DDoS Attack Explained - How It Works',

        whatIsIt: `DDoS stands for "Distributed Denial of Service" - imagine if thousands of people called your phone at the same time. Your phone would crash, and your real friends couldn't reach you!

That's exactly what happens to websites during a DDoS attack. Hackers use thousands of computers (often infected with malware) to send millions of requests to a website all at once. The website's servers get overwhelmed and crash, so normal people can't use it.

This is often used to attack gaming servers, online stores, or to demand money from companies.`,

        howItHappens: [
            {
                title: 'Build Botnet',
                description: 'Attacker infects thousands of computers around the world with malware',
                icon: '🤖'
            },
            {
                title: 'Create Zombie Army',
                description: 'These infected computers become "zombies" controlled by the attacker',
                icon: '🧟'
            },
            {
                title: 'Command Attack',
                description: 'Attacker commands all zombies to visit a target website simultaneously',
                icon: '📡'
            },
            {
                title: 'Traffic Flood',
                description: 'The website receives millions of fake visitors at once',
                icon: '🌊'
            },
            {
                title: 'Server Crash',
                description: 'Website crashes and real users see "site unavailable" errors',
                icon: '💥'
            }
        ],

        realExample: {
            title: 'Dyn Attack (2016)',
            description: 'Hackers launched a massive DDoS attack that took down Twitter, Netflix, Reddit, Spotify, and many other major websites for almost an entire day. They used infected smart devices (cameras, DVRs) to send 1.2 Terabits of data per second - that\'s like downloading 50,000 movies every second!',
            stats: [
                { value: '100K+', label: 'Devices Used' },
                { value: '1.2 Tbps', label: 'Traffic' },
                { value: '80+', label: 'Sites Down' }
            ]
        },

        whyDangerous: [
            'Takes down important services like banks, hospitals, and emergency services',
            'Businesses lose millions of dollars when their websites are down',
            'Can be used to distract while hackers steal data',
            'Online games and services become unavailable',
            'Your own infected device could be used to attack others without you knowing'
        ],

        howToStaySafe: [
            'Keep your devices updated to prevent them from being used in attacks',
            'Change default passwords on smart devices (cameras, routers, etc.)',
            'Use a reliable internet service provider with DDoS protection',
            'Install security software on all your devices',
            'Report suspicious activity on your network'
        ],

        phishGuardDetection: 'PhishGuard focuses on phishing detection, but we educate users about DDoS attacks as part of comprehensive cybersecurity awareness.'
    },

    {
        id: 'password-attacks',
        name: 'Password Attacks',
        icon: Key,
        color: '#22c55e',
        severity: 'high',
        shortDescription: 'Hackers try to guess or steal your passwords using various clever techniques.',

        videoId: 'aUFjQPhTzVE',
        videoTitle: 'Password Security - How Hackers Crack Passwords',

        whatIsIt: `Password attacks are when hackers try to figure out your password to break into your accounts. It's like someone trying every key on a keychain until they find the one that opens your door!

There are several ways hackers do this:

• BRUTE FORCE: They try millions of password combinations super fast using computers

• DICTIONARY ATTACK: They try common words and passwords like "123456" or "password"

• CREDENTIAL STUFFING: If your password leaked from one site, they try it on other sites

• SOCIAL ENGINEERING: They trick you into telling them your password`,

        howItHappens: [
            {
                title: 'Target Identification',
                description: 'Attacker identifies a target - your email, social media, or bank account',
                icon: '🎯'
            },
            {
                title: 'Common Passwords',
                description: 'They use automated tools to try thousands of common passwords',
                icon: '🔢'
            },
            {
                title: 'Personal Info',
                description: 'If that fails, they try personal info like birthdays or pet names',
                icon: '📅'
            },
            {
                title: 'Leaked Databases',
                description: 'They buy leaked passwords from the dark web',
                icon: '🌑'
            },
            {
                title: 'Account Takeover',
                description: 'Once they crack one password, they try it on all your other accounts',
                icon: '🔓'
            }
        ],

        realExample: {
            title: 'Zoom Credential Stuffing (2019)',
            description: 'Hackers used "credential stuffing" to break into 500,000 Zoom accounts. They used username/password combinations leaked from other websites to try logging into Zoom. Because many people use the same password everywhere, thousands of accounts were compromised and sold on the dark web for less than a penny each!',
            stats: [
                { value: '500K', label: 'Accounts Hacked' },
                { value: '$0.01', label: 'Price Per Account' },
                { value: '72%', label: 'Password Reuse' }
            ]
        },

        whyDangerous: [
            'Hackers can access your email and reset passwords for all your other accounts',
            'They can steal money from your bank accounts',
            'They can impersonate you on social media',
            'Your private messages and photos can be stolen',
            'If you use the same password everywhere, one breach compromises everything'
        ],

        howToStaySafe: [
            'Use LONG passwords (at least 12 characters) - longer is stronger!',
            'Use a UNIQUE password for each website',
            'Use a password manager to remember all your passwords',
            'Enable two-factor authentication (2FA) on all accounts',
            'Never use personal info in passwords (birthdays, pet names, etc.)',
            'Check if your passwords have been leaked: haveibeenpwned.com'
        ],

        phishGuardDetection: 'PhishGuard identifies phishing sites designed to steal passwords by mimicking login pages of popular services.'
    },

    {
        id: 'man-in-the-middle',
        name: 'Man-in-the-Middle Attacks',
        icon: Users,
        color: '#ec4899',
        severity: 'high',
        shortDescription: 'Attackers secretly intercept your internet connection to spy on or modify your data.',

        videoId: 'DgqID9k83oQ',
        videoTitle: 'Man in the Middle Attack Explained',

        whatIsIt: `Imagine you're passing notes to your friend in class, but someone in between secretly reads the notes and even changes what they say. That's a Man-in-the-Middle (MITM) attack!

When you use the internet (especially on public WiFi), hackers can position themselves between you and the website you're visiting. They can see everything you type - passwords, messages, credit card numbers - without you knowing!

They can even change information, like redirecting your bank payment to their account instead.`,

        howItHappens: [
            {
                title: 'Fake WiFi Setup',
                description: 'Attacker sets up a fake WiFi hotspot like "Free Coffee WiFi" or "Airport_Guest"',
                icon: '📶'
            },
            {
                title: 'Victim Connects',
                description: 'You connect to this WiFi thinking it\'s legitimate and safe',
                icon: '🔌'
            },
            {
                title: 'Traffic Interception',
                description: 'All your internet traffic now passes through the attacker\'s computer',
                icon: '👀'
            },
            {
                title: 'Data Capture',
                description: 'They can see everything - logins, messages, purchases',
                icon: '📝'
            },
            {
                title: 'Data Manipulation',
                description: 'They can modify data, insert malware, or steal credentials',
                icon: '✏️'
            }
        ],

        realExample: {
            title: 'Airport WiFi Attacks',
            description: 'Security researchers demonstrated how easy it is to steal data on public WiFi. At busy airports and coffee shops, hackers create fake networks with names like "Starbucks_Free_WiFi". In one test, researchers captured over 100 passwords in just 30 minutes from unsuspecting travelers!',
            stats: [
                { value: '100+', label: 'Passwords in 30min' },
                { value: '60%', label: 'Users Fooled' },
                { value: '$0', label: 'Equipment Cost' }
            ]
        },

        whyDangerous: [
            'All your passwords and personal data can be stolen',
            'Hackers can take over your online banking session',
            'They can change information you\'re sending (like payment details)',
            'They can inject malware into websites you visit',
            'You have no idea you\'re being attacked'
        ],

        howToStaySafe: [
            'Avoid public WiFi for sensitive activities (banking, shopping)',
            'Use a VPN (Virtual Private Network) on public WiFi',
            'Only visit websites with HTTPS (look for the padlock 🔒)',
            'Turn off auto-connect to WiFi networks',
            'Verify WiFi network names with staff before connecting',
            'Use mobile data instead of public WiFi when possible'
        ],

        phishGuardDetection: 'PhishGuard checks if websites use HTTPS encryption, which protects against man-in-the-middle attacks by encrypting your connection.'
    },

    {
        id: 'email-spoofing',
        name: 'Email Spoofing',
        icon: Mail,
        color: '#3b82f6',
        severity: 'medium',
        shortDescription: 'Attackers send emails that appear to come from someone you trust, but they\'re actually fake.',

        videoId: 'TjI8TnWzHq0',
        videoTitle: 'Email Spoofing & How to Spot Fake Emails',

        whatIsIt: `Email spoofing is like sending a letter with a fake return address. The email looks like it's from your boss, bank, or friend, but it's actually from a hacker!

Hackers can easily change the "From" address to make an email look like it came from anyone - even your mother! This tricks people into trusting the email and following its instructions, like clicking a link or sending money.

This is often combined with phishing attacks to make them more believable.`,

        howItHappens: [
            {
                title: 'Research Target',
                description: 'Attacker researches their target and finds out their contacts, writing style',
                icon: '🔎'
            },
            {
                title: 'Craft Fake Email',
                description: 'They create an email that looks like it\'s from a trusted person or company',
                icon: '✍️'
            },
            {
                title: 'Modify Headers',
                description: 'They change email headers to show a fake "From" address',
                icon: '📧'
            },
            {
                title: 'Victim Trusts Email',
                description: 'You receive the email and believe it\'s from who it says',
                icon: '✅'
            },
            {
                title: 'Action Taken',
                description: 'You follow instructions - send money, click links, or share information',
                icon: '💸'
            }
        ],

        realExample: {
            title: 'CEO Fraud / BEC Scam',
            description: 'A company lost $1.2 million when an employee received an email that appeared to be from the CEO saying "I need you to wire money to this account for a secret acquisition. Keep this confidential." The email looked exactly like the CEO\'s other emails - same name, same signature. This is called "Business Email Compromise" and happens to thousands of businesses every year!',
            stats: [
                { value: '$1.2M', label: 'Money Lost' },
                { value: '1', label: 'Email Needed' },
                { value: '26B', label: 'Lost Annually' }
            ]
        },

        whyDangerous: [
            'People trust emails from people they know',
            'Hard to detect - looks exactly like a real email',
            'Used to steal money through fake payment requests',
            'Can damage relationships and trust',
            'Used to spread malware and phishing links'
        ],

        howToStaySafe: [
            'Check the full email address, not just the display name',
            'Look for slight misspellings in email addresses',
            'Be suspicious of urgent money requests, even from bosses or family',
            'When in doubt, call the person directly to verify',
            'Look for poor grammar or unusual language',
            'Don\'t click links - type the website address yourself'
        ],

        phishGuardDetection: 'PhishGuard helps identify links in spoofed emails that lead to phishing sites. Always scan suspicious URLs before clicking.'
    },

    {
        id: 'fake-apps',
        name: 'Fake Apps & APKs',
        icon: Smartphone,
        color: '#10b981',
        severity: 'high',
        shortDescription: 'Dangerous apps that look like popular apps but are designed to steal your data or money.',

        videoId: 'DGy8d5yGPP4',
        videoTitle: 'How to Spot Fake Apps on Your Phone',

        whatIsIt: `Fake apps are like wolves in sheep's clothing - they LOOK like real apps (games, tools, or popular apps) but they're actually created by hackers to harm you!

These fake apps can:
• Steal your contacts, photos, and messages
• Record your calls and conversations
• Track your location
• Steal your passwords and banking information
• Subscribe you to premium services without permission

They often appear on unofficial app stores or as APK downloads from websites.`,

        howItHappens: [
            {
                title: 'Clone Popular App',
                description: 'Hackers create an app that looks exactly like a popular app (games, WhatsApp, etc)',
                icon: '🎭'
            },
            {
                title: 'Upload to Stores',
                description: 'They upload to unofficial stores or share links on social media',
                icon: '📱'
            },
            {
                title: 'Tempting Offer',
                description: 'You search for a free version of a paid app or premium features',
                icon: '🆓'
            },
            {
                title: 'Installation',
                description: 'You download and install the fake app on your phone',
                icon: '⬇️'
            },
            {
                title: 'Data Theft',
                description: 'The app requests permissions and starts stealing your data',
                icon: '🕵️'
            }
        ],

        realExample: {
            title: 'WhatsApp Pink Scam (2021)',
            description: 'Over 9 million Android users downloaded a fake "WhatsApp Pink" app that promised pink themes for WhatsApp. Instead, it stole their contacts, messages, and even sent malicious links to everyone in their contact list automatically! The app spread rapidly because people trusted messages from their own contacts promoting it.',
            stats: [
                { value: '9M+', label: 'Downloads' },
                { value: '100K', label: 'Data Stolen' },
                { value: '50+', label: 'Countries' }
            ]
        },

        whyDangerous: [
            'Can steal all your personal photos and messages',
            'Access to your banking apps and passwords',
            'Can subscribe you to paid services without consent',
            'May record your calls and conversations',
            'Can control your phone remotely',
            'Hard to remove once installed'
        ],

        howToStaySafe: [
            'ONLY download apps from official stores (Google Play, Apple App Store)',
            'Never install APK files from unknown websites',
            'Check app reviews and download counts before installing',
            'Look at what permissions an app requests - be suspicious of too many',
            'If an app promises paid features for free, it\'s probably fake',
            'Keep your phone\'s security settings on (like "Unknown sources" disabled)',
            'Regularly review installed apps and remove suspicious ones'
        ],

        phishGuardDetection: 'PhishGuard can identify websites that distribute fake APK files or link to unofficial app stores with malicious applications.'
    }
]

export function getAttackById(id) {
    return cyberAttacks.find(attack => attack.id === id)
}

export function getRelatedAttacks(currentId, limit = 3) {
    return cyberAttacks
        .filter(attack => attack.id !== currentId)
        .slice(0, limit)
}
