"use client"

import { useState } from "react"
import { Button } from "./components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card"
import { Textarea } from "./components/ui/textarea"
import { Badge } from "./components/ui/badge"
import { Loader2, ExternalLink, Scale, FileText } from "lucide-react"

function App() {
  const [query, setQuery] = useState("")
  const [response, setResponse] = useState(null)
  const [loading, setLoading] = useState(false)

  // Simulated API response
  const simulateApiCall = async (userQuery) => {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 2000))

    return {
      answer:
        "Yes, under Section 166 of the Motor Vehicles Act, 1988, the claimants are entitled to an addition for future prospects even when the deceased was self-employed and aged 54–55 years at the time of the accident. In Dani Devi v. Pritam Singh, the Court held that 10% of the deceased's annual income should be added as future prospects.",
      citations: [
        {
          text: "as the age of the deceased at the time of accident was held to be about 54-55 years by the learned Tribunal, being self-employed, as such, 10% of annual income should have been awarded on account of future prospects.",
          source: "Dani_Devi_v_Pritam_Singh.pdf",
          link: "https://lexisingapore-my.sharepoint.com/:b:/g/personal/harshit_lexi_sg/EdOegeiR_gdBvQxdyW4xE6oBCDgj5E4Bo5wjvhPHpqgIuQ?e=TEu4vz",
          paragraph: "Para 7",
        },
      ],
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!query.trim()) return

    setLoading(true)
    try {
      const result = await simulateApiCall(query)
      setResponse(result)
    } catch (error) {
      console.error("Error:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleCitationClick = (citation) => {
    // Open PDF in new tab
    window.open(citation.link, "_blank")

    // In a real implementation, you might also:
    // - Scroll to specific paragraph
    // - Highlight relevant text
    // - Show a toast notification
    console.log(`Opening ${citation.source} at ${citation.paragraph}`)
  }

  const handleExampleQuery = () => {
    setQuery(
      "In a motor accident claim where the deceased was self-employed and aged 54–55 years at the time of death, is the claimant entitled to an addition towards future prospects in computing compensation under Section 166 of the Motor Vehicles Act, 1988? If so, how much?",
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center py-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Scale className="h-8 w-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-slate-900">Lexi Legal Assistant</h1>
          </div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Ask legal questions and get AI-powered answers with citations from real legal documents
          </p>
        </div>

        {/* Input Panel */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Ask a Legal Question
            </CardTitle>
            <CardDescription>Enter your legal query below and get an answer with supporting citations</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Textarea
                  placeholder="Enter your legal question here..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="min-h-[120px] resize-none"
                  disabled={loading}
                />
                <div className="flex justify-between items-center">
                  <Button type="button" variant="outline" size="sm" onClick={handleExampleQuery} disabled={loading}>
                    Try Example Query
                  </Button>
                  <span className="text-sm text-slate-500">{query.length}/1000 characters</span>
                </div>
              </div>
              <Button type="submit" className="w-full" disabled={loading || !query.trim()}>
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  "Get Legal Answer"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Answer Panel */}
        {response && (
          <div className="space-y-4">
            {/* Answer Card */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-green-700">Legal Answer</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 leading-relaxed">{response.answer}</p>
              </CardContent>
            </Card>

            {/* Citations Card */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ExternalLink className="h-5 w-5" />
                  Supporting Citations
                </CardTitle>
                <CardDescription>Click on any citation to view the original document</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {response.citations.map((citation, index) => (
                  <div
                    key={index}
                    className="border rounded-lg p-4 hover:bg-slate-50 transition-colors cursor-pointer"
                    onClick={() => handleCitationClick(citation)}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <blockquote className="text-slate-700 italic border-l-4 border-blue-200 pl-4 mb-3">
                          "{citation.text}"
                        </blockquote>
                        <div className="flex items-center gap-2 flex-wrap">
                          <Badge variant="secondary" className="text-xs">
                            {citation.source}
                          </Badge>
                          {citation.paragraph && (
                            <Badge variant="outline" className="text-xs">
                              {citation.paragraph}
                            </Badge>
                          )}
                        </div>
                      </div>
                      <ExternalLink className="h-4 w-4 text-slate-400 flex-shrink-0 mt-1" />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        )}

        {/* Footer */}
        <div className="text-center py-6 text-sm text-slate-500">
          <p>© 2024 Lexi Legal Assistant - Powered by AI for Legal Research</p>
        </div>
      </div>
    </div>
  )
}

export default App
