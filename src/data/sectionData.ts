import { z } from "zod";

export interface Tool {
  id: string;
  name: string;
  description: string;
  status: 'active' | 'inactive';
  url?: string;
  docsUrl?: string;
}

export interface Section {
  id: string;
  title: string;
  tools: Tool[];
}

export const sections: Section[] = [
  {
    id: 'network-discovery',
    title: 'Network Discovery & Mapping',
    tools: [
      {
        id: 'nmap',
        name: 'Nmap',
        description: 'Advanced network scanner for security auditing',
        status: 'active',
        url: 'https://nmap.org',
        docsUrl: 'https://nmap.org/docs.html'
      },
      {
        id: 'nuclei',
        name: 'Nuclei',
        description: 'Fast and customizable vulnerability scanner',
        status: 'active',
        url: 'https://nuclei.projectdiscovery.io',
        docsUrl: 'https://nuclei.projectdiscovery.io/nuclei/get-started/'
      },
      {
        id: 'masscan',
        name: 'Masscan',
        description: 'Fast port scanner for enterprise networks',
        status: 'active',
        url: 'https://github.com/robertdavidgraham/masscan',
        docsUrl: 'https://github.com/robertdavidgraham/masscan#masscan-mass-ip-port-scanner'
      },
      {
        id: 'angry-ip',
        name: 'Angry IP Scanner',
        description: 'Fast network scanner with cross-platform support',
        status: 'active',
        url: 'https://angryip.org',
        docsUrl: 'https://angryip.org/documentation/'
      },
      {
        id: 'zmap',
        name: 'ZMap',
        description: 'Large network scanner',
        status: 'active',
        url: 'https://zmap.io/',
        docsUrl: 'https://github.com/zmap/zmap'
      },
      {
        id: 'shodan',
        name: 'Shodan',
        description: 'Internet-facing asset search engine',
        status: 'active',
        url: 'https://www.shodan.io/',
        docsUrl: 'https://developer.shodan.io/'
      }
    ]
  },
  {
    id: 'vulnerability-management',
    title: 'Vulnerability Management',
    tools: [
      {
        id: 'openvas',
        name: 'OpenVAS',
        description: 'Open-source vulnerability scanner and manager',
        status: 'active',
        url: 'https://www.openvas.org/',
        docsUrl: 'https://docs.greenbone.net/GSM-Manual/gos-22.04/en/'
      },
      {
        id: 'nessus',
        name: 'Nessus Essentials',
        description: 'Professional vulnerability scanner with extensive database',
        status: 'active',
        url: 'https://www.tenable.com/products/nessus',
        docsUrl: 'https://docs.tenable.com/nessus/'
      },
      {
        id: 'nexpose',
        name: 'Nexpose',
        description: 'Comprehensive vulnerability management platform',
        status: 'active',
        url: 'https://www.rapid7.com/products/nexpose/',
        docsUrl: 'https://docs.rapid7.com/nexpose/'
      },
      {
        id: 'hackerone',
        name: 'HackerOne',
        description: 'Bug bounty management platform',
        status: 'active',
        url: 'https://www.hackerone.com/',
        docsUrl: 'https://docs.hackerone.com/'
      }
    ]
  },
  {
    id: 'security-monitoring',
    title: 'Security Monitoring',
    tools: [
      {
        id: 'sysmon',
        name: 'Sysmon',
        description: 'System Monitor for Windows',
        status: 'active',
        url: 'https://learn.microsoft.com/en-us/sysinternals/downloads/sysmon',
        docsUrl: 'https://learn.microsoft.com/en-us/sysinternals/downloads/sysmon#usage'
      },
      {
        id: 'kibana',
        name: 'Kibana',
        description: 'Data visualization and exploration',
        status: 'active',
        url: 'https://www.elastic.co/kibana',
        docsUrl: 'https://www.elastic.co/guide/en/kibana/current/index.html'
      },
      {
        id: 'logstash',
        name: 'Logstash',
        description: 'Data collection and processing',
        status: 'active',
        url: 'https://www.elastic.co/logstash',
        docsUrl: 'https://www.elastic.co/guide/en/logstash/current/index.html'
      },
      {
        id: 'parsedmarc',
        name: 'parsedmarc',
        description: 'Email DMARC data visualization',
        status: 'active',
        url: 'https://github.com/domainaware/parsedmarc',
        docsUrl: 'https://github.com/domainaware/parsedmarc#parsedmarc'
      },
      {
        id: 'phishing-catcher',
        name: 'Phishing Catcher',
        description: 'Phishing catcher using Certstream',
        status: 'active',
        url: 'https://github.com/x0rz/phishing_catcher',
        docsUrl: 'https://github.com/x0rz/phishing_catcher#phishing-catcher'
      },
      {
        id: 'maltrail',
        name: 'maltrail',
        description: 'Malicious traffic detection system',
        status: 'active',
        url: 'https://github.com/stamparm/maltrail',
        docsUrl: 'https://github.com/stamparm/maltrail#maltrail'
      },
      {
        id: 'autoruns-to-wineventlog',
        name: 'AutorunsToWinEventLog',
        description: 'Windows AutoRuns Event Parser',
        status: 'active',
        url: 'https://github.com/palantir/windows-event-forwarding',
        docsUrl: 'https://github.com/palantir/windows-event-forwarding#autorunstowineventlog'
      },
      {
        id: 'procfilter',
        name: 'procfilter',
        description: 'YARA-integrated process denial framework',
        status: 'active',
        url: 'https://github.com/Neo23x0/procfilter',
        docsUrl: 'https://github.com/Neo23x0/procfilter#procfilter'
      },
      {
        id: 'velociraptor',
        name: 'Velociraptor',
        description: 'Endpoint visibility and collection tool',
        status: 'active',
        url: 'https://docs.velociraptor.app',
        docsUrl: 'https://docs.velociraptor.app/docs/overview'
      },
      {
        id: 'sysmon-search',
        name: 'SysmonSearch',
        description: 'Sysmon event log visualization',
        status: 'active',
        url: 'https://github.com/baronpan/SysmonSearch',
        docsUrl: 'https://github.com/baronpan/SysmonSearch#sysmonsearch'
      }
    ]
  },
  {
    id: 'threat-tools-and-techniques',
    title: 'Threat Tools and Techniques',
    tools: [
      {
        id: 'lolbas',
        name: 'LOLBAS',
        description: 'Living Off The Land Windows Binaries',
        status: 'active',
        url: 'https://lolbas-project.github.io/',
        docsUrl: 'https://lolbas-project.github.io/'
      },
      {
        id: 'gtfobins',
        name: 'GTFOBins',
        description: 'Living Off The Land Linux Binaries',
        status: 'active',
        url: 'https://gtfobins.github.io/',
        docsUrl: 'https://gtfobins.github.io/'
      },
      {
        id: 'filesec',
        name: 'filesec.io',
        description: 'Attacker file extensions',
        status: 'active',
        url: 'https://filesec.io/',
        docsUrl: 'https://filesec.io/'
      },
      {
        id: 'kql-search',
        name: 'KQL Search',
        description: 'KQL query aggregator',
        status: 'active',
        url: 'https://kqlsearch.com/',
        docsUrl: 'https://kqlsearch.com/'
      },
      {
        id: 'unprotect-project',
        name: 'Unprotect Project',
        description: 'Malware evasion techniques knowledge base',
        status: 'active',
        url: 'https://unprotect.it/',
        docsUrl: 'https://unprotect.it/'
      },
      {
        id: 'chainsaw',
        name: 'Chainsaw',
        description: 'Fast Windows Forensic Artefacts Searcher',
        status: 'active',
        url: 'https://github.com/williballenthin/chainsaw',
        docsUrl: 'https://github.com/williballenthin/chainsaw#usage'
      },
      {
        id: 'freq',
        name: 'freq',
        description: 'Domain generation algorithm malware detection',
        status: 'active',
        url: 'https://github.com/ytisf/Freq',
        docsUrl: 'https://github.com/ytisf/Freq#freq'
      },
      {
        id: 'yarGen',
        name: 'yarGen',
        description: 'YARA rule generator',
        status: 'active',
        url: 'https://github.com/Neo23x0/yarGen',
        docsUrl: 'https://github.com/Neo23x0/yarGen#yarGen'
      },
      {
        id: 'email-analyzer',
        name: 'EmailAnalyzer',
        description: 'Suspicious emails analyzer',
        status: 'active',
        url: 'https://github.com/Neo23x0/EmailAnalyzer',
        docsUrl: 'https://github.com/Neo23x0/EmailAnalyzer#emailanalyzer'
      },
      {
        id: 'vcg',
        name: 'VCG',
        description: 'Code security scanning tool',
        status: 'active',
        url: 'https://github.com/returntocorp/VCG',
        docsUrl: 'https://github.com/returntocorp/VCG#vcg'
      },
      {
        id: 'cyberchef',
        name: 'CyberChef',
        description: 'GCHQ online data manipulation platform',
        status: 'active',
        url: 'https://gchq.github.io/CyberChef/',
        docsUrl: 'https://gchq.github.io/CyberChef/'
      }
    ]
  },
  {
    id: 'threat-intelligence',
    title: 'Threat Intelligence',
    tools: [
      {
        id: 'maltego',
        name: 'Maltego',
        description: 'Threat Intelligence Platform',
        status: 'active',
        url: 'https://www.paterva.com/maltego/',
        docsUrl: 'https://www.paterva.com/maltego/documentation/'
      },
      {
        id: 'misp',
        name: 'MISP',
        description: 'Malware Information Sharing Platform',
        status: 'active',
        url: 'https://www.misp-project.org/',
        docsUrl: 'https://www.misp-project.org/documentation.html'
      },
      {
        id: 'threatconnect',
        name: 'ThreatConnect',
        description: 'Threat data aggregation',
        status: 'active',
        url: 'https://www.threatconnect.com/',
        docsUrl: 'https://www.threatconnect.com/resources/'
      },
      {
        id: 'adversary-emulation-library',
        name: 'Adversary Emulation Library',
        description: 'Open library of adversary emulation plans',
        status: 'active',
        url: 'https://github.com/center-for-threat-informed-defense/adversary_emulation_library',
        docsUrl: 'https://github.com/center-for-threat-informed-defense/adversary_emulation_library#adversary-emulation-library'
      }
    ]
  },
  {
    id: 'incident-response-planning',
    title: 'Incident Response Planning',
    tools: [
      {
        id: 'nist-csf',
        name: 'NIST Cybersecurity Framework',
        description: 'Framework for managing cybersecurity risk',
        status: 'active',
        url: 'https://www.nist.gov/cyberframework',
        docsUrl: 'https://www.nist.gov/cyberframework'
      },
      {
        id: 'incident-response-plan',
        name: 'Incident Response Plan',
        description: 'Framework for incident response',
        status: 'active',
        url: 'https://www.cisa.gov/publication/incident-response-plan',
        docsUrl: 'https://www.cisa.gov/publication/incident-response-plan'
      },
      {
        id: 'ransomware-response-plan',
        name: 'Ransomware Response Plan',
        description: 'Framework for ransomware response',
        status: 'active',
        url: 'https://www.cisa.gov/publication/ransomware-response-checklist',
        docsUrl: 'https://www.cisa.gov/publication/ransomware-response-checklist'
      },
      {
        id: 'incident-response-reference-guide',
        name: 'Incident Response Reference Guide',
        description: 'Incident preparation guidance paper',
        status: 'active',
        url: 'https://www.cisa.gov/publication/incident-response-reference-guide',
        docsUrl: 'https://www.cisa.gov/publication/incident-response-reference-guide'
      },
      {
        id: 'awesome-incident-response',
        name: 'Awesome Incident Response',
        description: 'List of tools for incident response',
        status: 'active',
        url: 'https://github.com/meirwah/awesome-incident-response',
        docsUrl: 'https://github.com/meirwah/awesome-incident-response#awesome-incident-response'
      }
    ]
  },
  {
    id: 'malware-detection-and-analysis',
    title: 'Malware Detection & Analysis',
    tools: [
      {
        id: 'virustotal',
        name: 'VirusTotal',
        description: 'Malicious IOC Sharing Platform',
        status: 'active',
        url: 'https://www.virustotal.com/',
        docsUrl: 'https://developers.virustotal.com/v3.0/reference'
      },
      {
        id: 'ida',
        name: 'IDA',
        description: 'Malware disassembler and debugger',
        status: 'active',
        url: 'https://www.hex-rays.com/products/ida/',
        docsUrl: 'https://www.hex-rays.com/products/ida/support/index.shtml'
      },
      {
        id: 'ghidra',
        name: 'Ghidra',
        description: 'Malware reverse engineering tool',
        status: 'active',
        url: 'https://ghidra-sre.org/',
        docsUrl: 'https://ghidra-sre.org/ghidra_docs/index.html'
      },
      {
        id: 'decode-vbe',
        name: 'decode-vbe',
        description: 'Encoded VBE script decoder',
        status: 'active',
        url: 'https://github.com/Decode-VBE/decode-vbe',
        docsUrl: 'https://github.com/Decode-VBE/decode-vbe#decode-vbe'
      },
      {
        id: 'pafish',
        name: 'pafish',
        description: 'Virtual machine sandbox detector',
        status: 'active',
        url: 'https://github.com/a0rtega/pafish',
        docsUrl: 'https://github.com/a0rtega/pafish#pafish'
      },
      {
        id: 'lookyloo',
        name: 'lookyloo',
        description: 'Phishing domain mapping',
        status: 'active',
        url: 'https://github.com/CIRCL/lookyloo',
        docsUrl: 'https://github.com/CIRCL/lookyloo#lookyloo'
      },
      {
        id: 'yara',
        name: 'YARA',
        description: 'Malware identification via pattern matching',
        status: 'active',
        url: 'https://virustotal.github.io/yara/',
        docsUrl: 'https://virustotal.github.io/yara/'
      },
      {
        id: 'cuckoo-sandbox',
        name: 'Cuckoo Sandbox',
        description: 'Malware analysis sandbox',
        status: 'active',
        url: 'https://cuckoosandbox.org/',
        docsUrl: 'https://cuckoosandbox.org/docs/'
      },
      {
        id: 'radare2',
        name: 'Radare2',
        description: 'Reverse engineering framework',
        status: 'active',
        url: 'https://rada.re/r/',
        docsUrl: 'https://rada.re/r/'
      },
      {
        id: 'dnspy',
        name: 'dnSpy',
        description: '.NET debugger and assembly editor',
        status: 'active',
        url: 'https://github.com/dnSpy/dnSpy',
        docsUrl: 'https://github.com/dnSpy/dnSpy#dnspy'
      },
      {
        id: 'malware-traffic-analysis',
        name: 'malware-traffic-analysis.net',
        description: 'Malware and packet capture samples',
        status: 'active',
        url: 'https://www.malware-traffic-analysis.net/',
        docsUrl: 'https://www.malware-traffic-analysis.net/'
      }
    ]
  },
  {
    id: 'data-recovery',
    title: 'Data Recovery',
    tools: [
      {
        id: 'recuva',
        name: 'Recuva',
        description: 'Professional file recovery tool',
        status: 'active',
        url: 'https://www.ccleaner.com/recuva',
        docsUrl: 'https://www.ccleaner.com/docs/recuva'
      },
      {
        id: 'extundelete',
        name: 'Extundelete',
        description: 'Ext3/ext4 partition recovery utility',
        status: 'active',
        url: 'http://extundelete.sourceforge.net/',
        docsUrl: 'http://extundelete.sourceforge.net/#usage'
      },
      {
        id: 'testdisk',
        name: 'TestDisk',
        description: 'Powerful free data recovery software',
        status: 'active',
        url: 'https://www.cgsecurity.org/wiki/TestDisk',
        docsUrl: 'https://www.cgsecurity.org/wiki/TestDisk_Step_By_Step'
      }
    ]
  },
  {
    id: 'digital-forensics',
    title: 'Digital Forensics',
    tools: [
      {
        id: 'sans-sift',
        name: 'SANS SIFT',
        description: 'SANS Investigative Forensic Toolkit',
        status: 'active',
        url: 'https://www.sans.org/tools/sift-workstation/',
        docsUrl: 'https://github.com/teamdfir/sift'
      },
      {
        id: 'sleuthkit',
        name: 'The Sleuth Kit',
        description: 'Digital forensics analysis toolkit',
        status: 'active',
        url: 'https://www.sleuthkit.org/',
        docsUrl: 'https://wiki.sleuthkit.org/'
      },
      {
        id: 'autopsy',
        name: 'Autopsy',
        description: 'Digital forensics platform',
        status: 'active',
        url: 'https://www.autopsy.com/',
        docsUrl: 'https://github.com/sleuthkit/autopsy/wiki'
      }
    ]
  },
  {
    id: 'security-awareness-training',
    title: 'Security Awareness Training',
    tools: [
      {
        id: 'tryhackme',
        name: 'TryHackMe',
        description: 'Interactive cybersecurity training platform',
        status: 'active',
        url: 'https://tryhackme.com',
        docsUrl: 'https://docs.tryhackme.com'
      },
      {
        id: 'hackthebox',
        name: 'HackTheBox',
        description: 'Advanced penetration testing labs',
        status: 'active',
        url: 'https://www.hackthebox.com',
        docsUrl: 'https://help.hackthebox.com'
      },
      {
        id: 'cyberdefenders',
        name: 'CyberDefenders',
        description: 'Blue team challenges platform',
        status: 'active',
        url: 'https://cyberdefenders.org',
        docsUrl: 'https://cyberdefenders.org/docs'
      },
    ]
  },
];