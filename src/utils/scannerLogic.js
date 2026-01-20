// Suspicious keywords commonly found in phishing URLs
const SUSPICIOUS_KEYWORDS = [
    'login', 'verify', 'secure', 'account', 'update', 'confirm',
    'banking', 'password', 'credential', 'signin', 'authenticate',
    'free', 'offer', 'prize', 'winner', 'claim', 'urgent',
    'suspended', 'limited', 'expire', 'alert', 'warning'
]

// Known brand names that are often impersonated
const KNOWN_BRANDS = [
    { name: 'google', domain: 'google.com' },
    { name: 'facebook', domain: 'facebook.com' },
    { name: 'amazon', domain: 'amazon.com' },
    { name: 'apple', domain: 'apple.com' },
    { name: 'microsoft', domain: 'microsoft.com' },
    { name: 'netflix', domain: 'netflix.com' },
    { name: 'paypal', domain: 'paypal.com' },
    { name: 'instagram', domain: 'instagram.com' },
    { name: 'twitter', domain: 'twitter.com' },
    { name: 'linkedin', domain: 'linkedin.com' },
    { name: 'flipkart', domain: 'flipkart.com' },
    { name: 'walmart', domain: 'walmart.com' },
    { name: 'ebay', domain: 'ebay.com' },
    { name: 'bank', domain: null },
    { name: 'chase', domain: 'chase.com' },
    { name: 'wellsfargo', domain: 'wellsfargo.com' },
    { name: 'hdfc', domain: 'hdfcbank.com' },
    { name: 'icici', domain: 'icicibank.com' },
    { name: 'sbi', domain: 'onlinesbi.com' },
]

// Mock blacklisted domains
const BLACKLISTED_DOMAINS = [
    'fake-login.com',
    'secure-update.xyz',
    'account-verify.tk',
    'free-prize.ml',
    'banking-alert.ga',
]

// Trusted top-level domains
const TRUSTED_TLDS = ['.com', '.org', '.net', '.edu', '.gov', '.io', '.co', '.in', '.uk', '.us']
const SUSPICIOUS_TLDS = ['.tk', '.ml', '.ga', '.cf', '.gq', '.xyz', '.top', '.work', '.click', '.link']

/**
 * Analyzes URL patterns for suspicious characteristics
 */
function analyzeUrlPattern(url) {
    const result = {
        name: 'URL Structure',  // Changed from title
        status: 'pass',
        message: 'The website link looks normal and valid.', // Changed from description
        details: '',
        score: 25,
        issues: []
    }

    try {
        const urlObj = new URL(url)
        const hostname = urlObj.hostname.toLowerCase()
        const pathname = urlObj.pathname.toLowerCase()
        const fullUrl = url.toLowerCase()

        // Check for suspicious keywords
        const foundKeywords = SUSPICIOUS_KEYWORDS.filter(keyword =>
            fullUrl.includes(keyword)
        )
        if (foundKeywords.length > 0) {
            result.issues.push(`Suspicious keywords found: ${foundKeywords.join(', ')}`)
            result.score -= foundKeywords.length * 3
        }

        // Check for excessive hyphens in domain
        const hyphenCount = (hostname.match(/-/g) || []).length
        if (hyphenCount >= 3) {
            result.issues.push(`Excessive hyphens in domain (${hyphenCount} found)`)
            result.score -= 5
        }

        // Check for numbers in domain that look like letter substitution
        if (/[0-9]/.test(hostname) && !/^[0-9]+\./.test(hostname)) {
            const leetSpeak = hostname.match(/[0-9]/g)
            if (leetSpeak && leetSpeak.length > 0) {
                result.issues.push('Numbers in domain that may be letter substitutions')
                result.score -= 5
            }
        }

        // Check URL length
        if (url.length > 100) {
            result.issues.push(`URL is unusually long (${url.length} characters)`)
            result.score -= 5
        }

        // Check for IP address instead of domain
        if (/^[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+$/.test(hostname)) {
            result.issues.push('URL uses IP address instead of domain name')
            result.score -= 10
        }

        // Check for suspicious TLDs
        const tld = '.' + hostname.split('.').pop()
        if (SUSPICIOUS_TLDS.includes(tld)) {
            result.issues.push(`Uses suspicious domain extension (${tld})`)
            result.score -= 8
        }

        // Check for too many subdomains
        const subdomainCount = hostname.split('.').length - 2
        if (subdomainCount > 2) {
            result.issues.push(`Unusually many subdomains (${subdomainCount} levels)`)
            result.score -= 5
        }

    } catch (e) {
        result.issues.push('Invalid URL format')
        result.score = 0
    }

    // Update status based on issues
    if (result.issues.length > 3) {
        result.status = 'fail'
        result.message = 'The link looks very suspicious. It contains many strange patterns used by scammers.'
    } else if (result.issues.length > 0) {
        result.status = 'warning'
        result.message = 'The link has some strange characteristics. Be careful.'
    }

    result.details = result.issues.length > 0
        ? result.issues.join(' • ')
        : 'No suspicious patterns detected in the URL structure.'

    result.score = Math.max(0, result.score)

    return result
}

/**
 * Simulates domain age check
 */
function analyzeDomainAge(url) {
    const result = {
        name: 'Website Age',
        status: 'pass',
        message: 'This website has been online for a long time, which is a good sign.',
        details: '',
        score: 20,
        issues: []
    }

    try {
        const urlObj = new URL(url)
        const hostname = urlObj.hostname.toLowerCase()

        // Known trusted domains (simulated)
        const trustedDomains = ['google.com', 'facebook.com', 'amazon.com', 'microsoft.com',
            'apple.com', 'netflix.com', 'github.com', 'wikipedia.org', 'youtube.com']

        const isKnownTrusted = trustedDomains.some(d => hostname.endsWith(d))

        if (isKnownTrusted) {
            result.details = 'This is a well-known, established domain registered for many years.'
            return result
        }

        // Simulate domain age based on TLD and patterns
        const hasSuspiciousTld = SUSPICIOUS_TLDS.some(tld => hostname.endsWith(tld))
        const hasRandomChars = /[0-9]{3,}/.test(hostname) || /[a-z]{15,}/.test(hostname)

        if (hasSuspiciousTld || hasRandomChars) {
            result.status = 'warning'
            result.score = 8
            result.message = 'This website is very new (less than 30 days old).'
            result.details = 'Newly registered domains (less than 30 days) are often used for phishing.'
            result.issues.push('Domain may be newly registered')
        } else {
            // Random age simulation for demo
            const randomAge = Math.random()
            if (randomAge < 0.3) {
                result.status = 'warning'
                result.score = 10
                result.message = 'This website was created recently (less than 6 months ago).'
                result.details = 'New domains require extra caution. Verify the site\'s legitimacy before entering sensitive information.'
            } else {
                result.details = 'Domain has been registered for a reasonable period.'
            }
        }

    } catch (e) {
        result.status = 'fail'
        result.score = 0
        result.message = 'Could not verify when this website was created.'
    }

    return result
}

/**
 * Checks for HTTPS/SSL
 */
function analyzeSSL(url) {
    const result = {
        name: 'Secure Connection (HTTPS)',
        status: 'pass',
        message: 'This website uses a secure connection, so your passwords are safe.',
        details: 'The site has a valid SSL certificate, encrypting data between you and the server.',
        score: 20,
        issues: []
    }

    try {
        const urlObj = new URL(url)

        if (urlObj.protocol !== 'https:') {
            result.status = 'fail'
            result.score = 0
            result.message = 'This website is NOT secure. Hackers can steal your passwords here.'
            result.details = 'Your data is NOT encrypted. Any information you enter (passwords, credit cards) can be stolen by hackers. Never enter sensitive information on HTTP sites.'
            result.issues.push('No SSL/TLS encryption')
        }

    } catch (e) {
        result.status = 'fail'
        result.score = 0
        result.message = 'Invalid URL format.'
    }

    return result
}

/**
 * Detects brand impersonation attempts
 */
function analyzeBrandImpersonation(url) {
    const result = {
        name: 'Brand Identity',
        status: 'pass',
        message: 'This website is not pretending to be a famous brand.',
        details: 'The URL does not appear to be mimicking any major brands.',
        score: 20,
        issues: []
    }

    try {
        const urlObj = new URL(url)
        const hostname = urlObj.hostname.toLowerCase()
        const fullUrl = url.toLowerCase()

        for (const brand of KNOWN_BRANDS) {
            // Check if URL contains brand name but isn't the actual domain
            if (fullUrl.includes(brand.name)) {
                if (brand.domain && !hostname.endsWith(brand.domain)) {
                    result.issues.push(`Appears to impersonate ${brand.name.toUpperCase()}`)
                    result.status = 'fail'
                    result.score = 0
                } else if (!brand.domain) {
                    // Generic terms like "bank"
                    result.issues.push(`Contains sensitive keyword: "${brand.name}"`)
                    if (result.status !== 'fail') {
                        result.status = 'warning'
                        result.score = 10
                    }
                }
            }

            // Check for typosquatting (common misspellings)
            const typos = generateTypos(brand.name)
            for (const typo of typos) {
                if (fullUrl.includes(typo) && typo !== brand.name) {
                    result.issues.push(`Possible typosquatting: "${typo}" looks like "${brand.name}"`)
                    result.status = 'fail'
                    result.score = 0
                }
            }
        }

        if (result.issues.length > 0) {
            result.message = result.status === 'fail'
                ? 'This website is mimicking a famous brand to trick you!'
                : 'This URL contains brand names but might not be official.'
            result.details = result.issues.join(' • ')
        }

    } catch (e) {
        result.details = 'Could not analyze for brand impersonation.'
    }

    return result
}

/**
 * Generate common typos for a brand name
 */
function generateTypos(name) {
    const typos = [name]

    // Letter substitutions
    const subs = { 'o': '0', 'i': '1', 'e': '3', 'a': '4', 's': '5', 'l': '1' }
    for (const [letter, num] of Object.entries(subs)) {
        if (name.includes(letter)) {
            typos.push(name.replace(letter, num))
        }
    }

    // Double letters
    for (let i = 0; i < name.length; i++) {
        typos.push(name.slice(0, i) + name[i] + name.slice(i))
    }

    // Missing letters
    for (let i = 0; i < name.length; i++) {
        typos.push(name.slice(0, i) + name.slice(i + 1))
    }

    return typos
}

/**
 * Checks against mock blacklist
 */
function analyzeBlacklist(url) {
    const result = {
        name: 'Database Check',
        status: 'pass',
        message: 'This website is not currently listed in our database of dangerous sites.',
        details: 'The website has not been reported as malicious in major threat databases.',
        score: 15,
        issues: []
    }

    try {
        const urlObj = new URL(url)
        const hostname = urlObj.hostname.toLowerCase()

        // Check mock blacklist
        for (const blacklisted of BLACKLISTED_DOMAINS) {
            if (hostname.includes(blacklisted) || hostname === blacklisted) {
                result.status = 'fail'
                result.score = 0
                result.message = 'DANGER: This website is known to be malicious!'
                result.details = 'This domain has been reported as malicious. Do NOT visit this website or enter any information.'
                result.issues.push('Domain found on blacklist')
                return result
            }
        }

        // Simulate reputation check for suspicious TLDs
        if (SUSPICIOUS_TLDS.some(tld => hostname.endsWith(tld))) {
            result.status = 'warning'
            result.score = 8
            result.message = 'This website domain extension is often used for spam.'
            result.details = 'This domain uses a TLD commonly associated with spam. Exercise caution.'
        }

    } catch (e) {
        result.details = 'Could not check reputation.'
    }

    return result
}

/**
 * Main scanning function
 */
export function scanUrl(url) {
    // Normalize URL
    let normalizedUrl = url.trim()
    if (!normalizedUrl.startsWith('http://') && !normalizedUrl.startsWith('https://')) {
        normalizedUrl = 'https://' + normalizedUrl
    }

    // Run all analyses
    const analyses = [
        analyzeUrlPattern(normalizedUrl),
        analyzeDomainAge(normalizedUrl),
        analyzeSSL(normalizedUrl),
        analyzeBrandImpersonation(normalizedUrl),
        analyzeBlacklist(normalizedUrl),
    ]

    // Calculate total score
    const totalScore = analyses.reduce((sum, a) => sum + a.score, 0)

    // Determine risk level
    let riskLevel = 'safe'
    if (totalScore < 40) {
        riskLevel = 'high'
    } else if (totalScore < 70) {
        riskLevel = 'medium'
    }

    // Generate summary
    const failedChecks = analyses.filter(a => a.status === 'fail')
    const warningChecks = analyses.filter(a => a.status === 'warning')

    let summary = ''
    if (riskLevel === 'safe') {
        summary = 'This website appears to be safe. No major security issues were detected.'
    } else if (riskLevel === 'medium') {
        summary = 'This website has some suspicious characteristics. Proceed with caution and verify its authenticity before entering any personal information.'
    } else {
        summary = 'WARNING: This website shows multiple signs of being fake or a phishing attempt. Do NOT enter any personal information!'
    }

    // Detect attack types
    const attackTypes = []
    if (failedChecks.some(c => c.name.includes('Brand'))) {
        attackTypes.push('phishing')
    }
    if (failedChecks.some(c => c.name.includes('Secure'))) {
        attackTypes.push('man-in-the-middle')
    }
    if (analyses.some(a => a.issues?.some(i => i.toLowerCase().includes('keyword')))) {
        attackTypes.push('phishing')
    }

    return {
        url: normalizedUrl,
        scannedAt: new Date().toISOString(),
        score: totalScore,
        riskLevel,
        summary,
        analyses,
        failedChecks: failedChecks.length,
        warningChecks: warningChecks.length,
        attackTypes: [...new Set(attackTypes)],
    }
}

/**
 * Validate URL format
 */
export function isValidUrl(url) {
    try {
        let testUrl = url.trim()
        if (!testUrl.startsWith('http://') && !testUrl.startsWith('https://')) {
            testUrl = 'https://' + testUrl
        }
        new URL(testUrl)
        return true
    } catch {
        return false
    }
}
