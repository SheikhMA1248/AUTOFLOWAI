export interface CaseStudy {
  title: string;
  industry: string;
  description: string;
  imageUrl: string;
  stats: Array<{
    label: string;
    value: string;
  }>;
  content?: string; // Full case study content for the detailed view
}

export const caseStudies: CaseStudy[] = [
  {
    title: "Financial Document Processing Automation",
    industry: "Banking & Finance",
    description: "Automated processing of loan applications reducing processing time from 3 days to 4 hours while improving accuracy by 95%.",
    imageUrl: "https://images.pexels.com/photos/7567444/pexels-photo-7567444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    stats: [
      { label: "Time Saved", value: "94%" },
      { label: "Error Reduction", value: "95%" }
    ],
    content: `Our client, a leading financial institution, was struggling with the manual processing of loan applications. The process was time-consuming, error-prone, and created significant bottlenecks in their operations.

We implemented an AI-powered document processing system that could:
- Automatically extract and validate information from various document types
- Cross-reference data across multiple sources
- Flag discrepancies for human review
- Generate comprehensive reports for compliance

The results were transformative:
- Processing time reduced from 3 days to just 4 hours
- 95% improvement in accuracy
- 80% reduction in manual data entry
- Increased customer satisfaction due to faster processing
- Significant cost savings in operational expenses`
  },
  {
    title: "Customer Service AI Agent Integration",
    industry: "E-commerce",
    description: "Developed an AI agent that handles 70% of customer inquiries automatically, with seamless handoff to human agents for complex cases.",
    imageUrl: "https://images.pexels.com/photos/8867433/pexels-photo-8867433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    stats: [
      { label: "Customer Satisfaction", value: "92%" },
      { label: "Resolution Speed", value: "3.5x faster" }
    ],
    content: `A rapidly growing e-commerce platform was struggling to maintain quality customer service as their user base expanded. They needed a solution that could scale with their growth while maintaining high customer satisfaction levels.

Our AI-powered customer service solution provided:
- 24/7 automated response capability
- Natural language processing for accurate query understanding
- Intelligent routing of complex cases to human agents
- Multi-language support
- Integration with existing CRM systems

Key achievements:
- 70% of customer inquiries handled automatically
- 92% customer satisfaction rate
- Response times reduced by 71%
- Significant cost savings in customer service operations
- Improved agent productivity for complex cases`
  },
  {
    title: "Multilingual Voice Agent for Healthcare",
    industry: "Healthcare",
    description: "Created a voice agent system capable of handling appointment scheduling and basic patient inquiries in 8 languages.",
    imageUrl: "https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    stats: [
      { label: "Staff Time Saved", value: "32 hrs/week" },
      { label: "Languages", value: "8" }
    ],
    content: `A large healthcare provider serving a diverse community needed a solution to handle appointment scheduling and basic patient inquiries in multiple languages. The existing system was creating language barriers and increasing wait times.

Our multilingual voice agent solution delivered:
- Natural conversation flow in 8 different languages
- Automated appointment scheduling and reminders
- Integration with existing healthcare systems
- HIPAA-compliant data handling
- Seamless escalation to human staff when needed

Impact:
- 32 hours per week of staff time saved
- Reduced wait times by 65%
- Increased accessibility for non-English speaking patients
- Improved appointment attendance rates
- Higher patient satisfaction scores`
  }
]; 