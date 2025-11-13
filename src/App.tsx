import { useState } from "react";
import { parseResume } from "react-resume-parser";
import ReactJsonPretty from "react-json-pretty";
import "react-json-pretty/themes/monikai.css";

export default function App() {
  const [result, setResult] = useState<any>(null);
  const [status, setStatus] = useState<"idle" | "parsing" | "error">("idle");
  const [message, setMessage] = useState<string>("");

  const handleParseFile = async (file: File) => {
    setStatus("parsing");
    setMessage("Parsing…");
    setResult(null);

    try {
      const res = await parseResume(file, { mode: "verbatim", source: "browser" });
      setResult(res);
      setStatus("idle");
      setMessage("");
    } catch (err: any) {
      setStatus("error");
      setMessage(err?.message || "An error occurred while parsing.");
    }
  };

  console.log(result, "")
  return (
    <div style={{ maxWidth: 960, margin: "40px auto", fontFamily: "system-ui, sans-serif", color: "black" }}>
      <h1>Resume Parser Playground</h1>
      <p>Drop a PDF (or DOCX) to parse; we’ll show the JSON below.</p>

      <input
        type="file"
        accept=".pdf,.docx,.txt"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) handleParseFile(file); 
        }}
      />

      {status === "parsing" && <p style={{ marginTop: 16 }}>⏳ {message}</p>}
      {status === "error" && <p style={{ marginTop: 16, color: "#ff6b6b" }}>⚠️ {message}</p>}
      {result?.warnings?.length &&
        <div style={{ color: "orange", marginTop: 16 }}>
          {result.warnings.map((w: any) => <div key={w.code}>⚠️ {w.message}</div>)}
        </div>}


      <h1>Example Result in JSON:</h1>
      {result && (
        <div style={{ marginTop: 24 }}>
          <ReactJsonPretty data={result} />
        </div>
      )}
    </div>
  );
}
