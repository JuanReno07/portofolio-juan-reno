import { Metric, TimelineItem, SkillCategory, CaseStudy, EducationItem, ContactInfo } from "@/lib/types/portfolio";

export const personalInfo = {
  name: "Yosafat Juan Reno",
  title: "IT Infrastructure & Senior Support Officer",
  location: "Bekasi, Indonesia",
  email: "yosafat.juan07@gmail.com",
  phone: "0812 1341 4897",
  linkedin: "https://www.linkedin.com/in/yosafat-juan-reno/",
  instagram: "https://www.instagram.com/juan_reno07",
  supportingStatement: "Managing reliable networks, systems, security, and IT support operations for more than 300 users.",
  introduction: "Experienced IT Infrastructure and Senior Support Officer with a proven track record of managing enterprise networks, core servers, and physical security systems. Skilled in coordinating multi-disciplinary support teams, administering firewall policies, and maintaining operational continuity.",
  detailedAbout: "IT Infrastructure and Senior Support Officer with 7+ years of hands-on experience coordinating a five-person IT team and supporting more than 300 users at the Cikarang site. Responsible for maintaining an enterprise infrastructure environment spanning 163 endpoints, 10 servers, 27 network devices, and large-scale CCTV operations.",
};

export const metrics: Metric[] = [
  {
    id: "experience",
    value: 7,
    suffix: "+",
    label: "Years Experience",
    description: "Hands-on experience in IT infrastructure, support, and operations.",
  },
  {
    id: "users",
    value: 300,
    suffix: "+",
    label: "Users Supported",
    description: "End-users supported at the Cikarang site across multiple departments.",
  },
  {
    id: "endpoints",
    value: 163,
    suffix: "",
    label: "Endpoints Managed",
    description: "Desktops, laptops, and thin clients maintained under policy compliance.",
  },
  {
    id: "servers",
    value: 10,
    suffix: "",
    label: "Servers Administered",
    description: "Active Directory, Group Policy, DNS/DHCP, and application servers.",
  },
  {
    id: "network-devices",
    value: 27,
    suffix: "",
    label: "Network Devices",
    description: "Mikrotik, Cisco, and Ruckus routers, switches, and access points.",
  },
  {
    id: "ip-cameras",
    value: 120,
    suffix: "",
    label: "IP Cameras",
    description: "High-definition surveillance cameras deployed for site safety.",
  },
  {
    id: "nvr-systems",
    value: 9,
    suffix: "",
    label: "NVR Systems",
    description: "Network Video Recorders managed for continuous surveillance archiving.",
  },
  {
    id: "team-coordinated",
    value: 5,
    suffix: "-Person",
    label: "IT Team Coordinated",
    description: "Leading and scheduling day-to-day work tasks for a team of 5 techs.",
  },
];

export const experience: TimelineItem[] = [
  {
    id: "prokemas",
    role: "IT Infrastructure & Senior Support Officer",
    company: "PT Prokemas Adhikari Kreasi",
    location: "Cikarang, Indonesia",
    period: "May 2018 - Present",
    achievements: [
      "Coordinate a five-person IT team and daily support operations for 300+ users.",
      "Manage 163 desktops and laptops, 10 servers, and 27 network devices.",
      "Install, configure, and troubleshoot Mikrotik, Cisco, and Ruckus infrastructure.",
      "Administer Fortigate and Mikrotik firewall policies, access control, NAT, VPN, IPSec, bandwidth management, and traffic filtering.",
      "Configure VLANs, inter-VLAN routing, TCP/IP, DHCP, and DNS settings across corporate networks.",
      "Administer Windows Server environments, including Active Directory, Group Policy Objects (GPO), and user access permissions.",
      "Maintain Zabbix monitoring systems and configure critical infrastructure alerting thresholds.",
      "Manage 120 IP cameras and 9 NVR systems for full-site physical security coverage.",
      "Resolve escalated support incidents involving servers, endpoints, networks, firewalls, and corporate email systems.",
      "Maintain accurate configuration records, standard operating procedures, and comprehensive IT asset inventories.",
    ],
  },
];

export const expertise: SkillCategory[] = [
  {
    id: "networking",
    category: "Networking",
    icon: "Network",
    skills: ["LAN & WAN Architecture", "Routing & Switching", "TCP/IP Protocol Suite", "VLAN Segmentation", "Inter-VLAN Routing", "DHCP & DNS Services", "Network Address Translation (NAT)", "VPN & IPSec Tunnels"],
  },
  {
    id: "security",
    category: "Network Security",
    icon: "ShieldAlert",
    skills: ["Fortigate NGFW Admin", "Mikrotik Firewall Security", "Access Control Lists (ACL)", "Bandwidth Management & QoS", "Traffic Filtering & Web Control", "Next-Generation Firewall (NGFW) Operations", "Endpoint Protection & Threat Mitigation"],
  },
  {
    id: "systems",
    category: "Systems & Monitoring",
    icon: "Server",
    skills: ["Windows Server Administration", "Active Directory (AD)", "Group Policy Objects (GPO)", "Zabbix Infrastructure Monitoring", "Bitdefender Enterprise Security", "Backup & Disaster Recovery Plans"],
  },
  {
    id: "hardware",
    category: "Infrastructure Hardware",
    icon: "Cpu",
    skills: ["Mikrotik Routers/Switches", "Cisco Routers & Catalyst Switches", "Ruckus Wireless Access Points", "CCTV Surveillance Systems", "NVR & DVR Archiving", "High-Definition IP Cameras"],
  },
  {
    id: "operations",
    category: "IT Operations & Support",
    icon: "Settings",
    skills: ["Incident Troubleshooting", "Root-Cause Analysis (RCA)", "IT Team Coordination", "Technical Documentation", "IT Asset Inventory Management", "Security Policy Implementation"],
  },
];

export const caseStudies: CaseStudy[] = [
  {
    id: "zabbix-monitoring",
    title: "Infrastructure Monitoring",
    context: "Needed real-time visibility into the health of 163 endpoints, 10 servers, and 27 network devices at the Cikarang site.",
    responsibility: "Configured Zabbix monitoring templates, SNMP community strings, and alerting thresholds for systems and networks.",
    technologies: ["Zabbix", "SNMP", "Windows Server", "Network Monitoring"],
    impact: "Provides real-time visibility and immediate alerts for hardware and network reachability across the site.",
    slug: "/work/zabbix-monitoring",
  },
  {
    id: "enterprise-vlan",
    title: "Network and VLAN Administration",
    context: "The existing flat network topology at the site had poor performance, high broadcast domains, and inadequate department security isolation.",
    responsibility: "Configured VLAN segmentations, trunk lines, and inter-VLAN routing on Mikrotik routers and Cisco Catalyst switches.",
    technologies: ["Cisco Catalyst", "Mikrotik RouterOS", "VLAN", "Routing", "Switching"],
    impact: "Segmented corporate, guest, and operational device networks to reduce broadcast traffic and establish subnet security.",
    slug: "/work/enterprise-vlan",
  },
  {
    id: "firewall-security",
    title: "Firewall and VPN Administration",
    context: "Needed secure remote access for engineering staff and robust protection against unauthorized external threats.",
    responsibility: "Managed Fortigate and Mikrotik firewall policies, NAT rules, access control lists, and configured secure IPSec and SSL VPN links.",
    technologies: ["Fortigate NGFW", "Mikrotik RouterOS", "IPSec VPN", "SSL VPN", "QoS"],
    impact: "Enforced site security policies and enabled authenticated remote connections for authorized personnel.",
    slug: "/work/firewall-security",
  },
  {
    id: "cctv-infrastructure",
    title: "CCTV Infrastructure Management",
    context: "Physical security requirements demanded high-availability video archiving across a large-scale facility.",
    responsibility: "Maintained and configured 120 IP cameras, PoE network switches, and 9 Network Video Recorders (NVRs) for continuous footage archiving.",
    technologies: ["IP Cameras", "NVR Systems", "PoE Switches", "CCTV Infrastructure"],
    impact: "Maintained continuous video archiving across all 9 NVRs to support physical safety and compliance audits.",
    slug: "/work/cctv-infrastructure",
  },
  {
    id: "it-support-operations",
    title: "IT Support Operations",
    context: "Providing daily support desk services for more than 300 site users and 163 endpoints.",
    responsibility: "Coordinated support tasks for a five-person IT team, administered Active Directory user access, and maintained endpoint compliance.",
    technologies: ["Active Directory", "IT Support Desk", "Team Coordination", "Bitdefender"],
    impact: "Maintained daily operational continuity for endpoints, system credentials, and asset documentation.",
    slug: "/work/it-support-operations",
  },
  {
    id: "windows-server-ad",
    title: "Windows Server and AD Administration",
    context: "Managing user credentials, network services, and group policies for site operations.",
    responsibility: "Administered Windows Server environments, Active Directory domains, DNS/DHCP services, and user access permissions.",
    technologies: ["Windows Server", "Active Directory", "Group Policy (GPO)", "DNS/DHCP"],
    impact: "Maintained centralized user account control and consistent security settings across desktops and laptops.",
    slug: "/work/windows-server-ad",
  },
];

export const education: EducationItem[] = [
  {
    degree: "Bachelor of Computer Science",
    institution: "Universitas Bhayangkara Jakarta Raya",
    location: "Bekasi, Indonesia",
    period: "Graduated May 2024",
    gpa: "3.53 / 4.00",
  },
];

export const contactInfo: ContactInfo = {
  email: "yosafat.juan07@gmail.com",
  phone: "0812 1341 4897",
  linkedin: "https://www.linkedin.com/in/yosafat-juan-reno/",
  instagram: "https://www.instagram.com/juan_reno07",
  location: "Bekasi, Indonesia",
};
