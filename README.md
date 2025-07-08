# Lexi Legal Assistant - Frontend Assignment

A minimal frontend interface for a Lexi-like legal assistant that allows users to ask legal questions, see generated answers, and view citations with clickable links to original documents.

## Features

- **Legal Query Input**: Clean text area for entering legal questions
- **AI-Generated Answers**: Display formatted legal answers in cards
- **Interactive Citations**: Clickable citations that open original PDF documents
- **Loading States**: Professional loading indicators during query processing
- **Responsive Design**: Works on desktop and mobile devices
- **Example Query**: Pre-filled example for motor accident compensation case

## Tech Stack

- **React.js** with **Vite** (Lightning fast development)
- **Tailwind CSS** for styling
- **Custom UI Components** (shadcn/ui style)
- **JavaScript JSX** (no TypeScript)
- **Lucide React** for icons

## How to Run

1. **Install dependencies**:
   \`\`\`bash
   npm install
   \`\`\`

2. **Start development server**:
   \`\`\`bash
   npm run dev
   \`\`\`

3. **Open in browser**:
   Navigate to `http://localhost:3000` (opens automatically)

## Available Scripts

- **Development**: `npm run dev` - Start Vite dev server with HMR
- **Build**: `npm run build` - Create production build
- **Preview**: `npm run preview` - Preview production build locally

## Usage

1. **Enter a legal question** in the text area or click "Try Example Query" for a pre-filled motor accident case
2. **Click "Get Legal Answer"** to submit the query
3. **View the AI-generated answer** in the response card
4. **Click on citations** to open the original PDF document in a new tab

## Citation Handling

- Citations are displayed with the exact text from the legal document
- Each citation shows the source document name and paragraph reference
- Clicking a citation opens the PDF in a new tab at the SharePoint link
- The system simulates scrolling to the relevant paragraph (Para 7 in the example)

## Example Case

The application demonstrates a motor accident compensation case:

**Query**: "In a motor accident claim where the deceased was self-employed and aged 54–55 years at the time of death, is the claimant entitled to an addition towards future prospects in computing compensation under Section 166 of the Motor Vehicles Act, 1988?"

**Answer**: Explains entitlement to 10% addition for future prospects based on Dani Devi v. Pritam Singh case

**Citation**: Links to the actual judgment PDF with paragraph reference

## Project Structure

\`\`\`
├── index.html            # Vite HTML template
├── src/
│   ├── components/
│   │   └── ui/           # UI components (Button, Card, etc.)
│   ├── App.jsx           # Main application component
│   ├── main.jsx          # Vite entry point
│   └── index.css         # Global styles with Tailwind
├── package.json
├── vite.config.js        # Vite configuration
├── tailwind.config.js    # Tailwind configuration
└── README.md
\`\`\`

## API Logic Simulation

The application simulates a POST request as specified in the assignment:

\`\`\`javascript
// Simulated API call with 2-second delay
const simulateApiCall = async (userQuery) => {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  
  return {
    answer: "Yes, under Section 166 of the Motor Vehicles Act, 1988...",
    citations: [
      {
        text: "As the age of the deceased at the time of accident was held to be about 54–55 years...",
        source: "Dani_Devi_v_Pritam_Singh.pdf",
        link: "https://lexisingapore-my.sharepoint.com/:b:/g/personal/harshit_lexi_sg/EdOegeiR_gdBvQxdyW4xE6oBCDgj5E4Bo5wjvhPHpqgIuQ?e=TEu4vz",
        paragraph: "Para 7"
      }
    ]
  }
}
\`\`\`

---

**Repository**: `Lexisg-frontend-intern-test`  
**Built for**: Lexi Frontend Assignment - Legal Assistant Interface with Citations  
**Powered by**: React.js + Vite ⚡
