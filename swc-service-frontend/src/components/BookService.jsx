import React, { useState, useEffect, useCallback } from "react";
import "./BookService.css";
import { getBrands } from "../api";

function BookService({ setCurrentPage }) {
  const [brands, setBrands] = useState([]);
  const [previews, setPreviews] = useState([]);

  const [form, setForm] = useState({
    brand: "",
    model: "",
    issues: [],
    otherIssue: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    files: [],
  });

  const issuesList = [
    "Battery Issue",
    "Glass Damage",
    "Water Damage",
    "Strap Replacement",
    "Time Not Accurate",
    "Crown Issue",
    "Dial Damage",
    "Button Not Working",
    "Watch Stopped",
  ];

  useEffect(() => {
    getBrands()
      .then((res) => setBrands(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleCheckbox = useCallback((issue, event) => {
    event.stopPropagation();

    setForm((prev) => ({
      ...prev,
      issues: prev.issues.includes(issue)
        ? prev.issues.filter((i) => i !== issue)
        : [...prev.issues, issue],
    }));
  }, []);

  const handleFileChange = useCallback(
    (e) => {
      const files = Array.from(e.target.files);

      const images = files.filter((f) => f.type.startsWith("image"));
      const videos = files.filter((f) => f.type.startsWith("video"));

      if (images.length !== 2 || videos.length !== 1) {
        alert("Please upload exactly 2 Images and 1 Video.");
        e.target.value = "";
        setPreviews([]);
        return;
      }

      previews.forEach((p) => URL.revokeObjectURL(p.url));

      setForm((prev) => ({
        ...prev,
        files,
      }));

      const previewUrls = files.map((file) => ({
        url: URL.createObjectURL(file),
        type: file.type,
      }));

      setPreviews(previewUrls);
    },
    [previews],
  );

  const updateFormField = useCallback((field, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      console.log(form);

      alert("🎉 Your Watch Service Request has been Submitted Successfully!");

      setForm({
        brand: "",
        model: "",
        issues: [],
        otherIssue: "",
        address: "",
        city: "",
        state: "",
        pincode: "",
        files: [],
      });

      setPreviews([]);

      e.target.reset();
    },
    [form],
  );

  return (
    <div className="service-wrapper">
      <form className="service-card" onSubmit={handleSubmit}>
        <div className="service-title">
          

          <p>
            Trusted Since <strong>1975</strong> • Professional Watch Care •
            Premium Customer Service
          </p>
        </div>
        {/* BRAND */}
        <div className="input-group">
          

          <select
            value={form.brand}
            onChange={(e) => updateFormField("brand", e.target.value)}
            required
            style={{backgroundColor: "black"}}
          >
            <option value="">Choose Brand</option>

            {brands.map((b) => (
              <option key={b.id} value={b.brandName}>
                {b.brandName}
              </option>
            ))}
          </select>
        </div>
        {/* MODEL */}
        <div className="input-group">
          

          <input
            type="text"
            placeholder="Example : Titan NK3718910"
            value={form.model}
            onChange={(e) => updateFormField("model", e.target.value)}
            required
          />
        </div>
        {/* ISSUES */}
        <div className="issues-field-container">
          

          <div className="checkbox-group">
            {issuesList.map((issue, index) => (
              <label
                key={issue}
                htmlFor={`issue-${index}`}
                className="checkbox-item"
              >
                <input
                  type="checkbox"
                  id={`issue-${index}`}
                  checked={form.issues.includes(issue)}
                  onChange={(e) => handleCheckbox(issue, e)}
                />

                <span>{issue}</span>
              </label>
            ))}
          </div>

          {/* <small className="selection-debug">
            Selected Issues ({form.issues.length}) :
            {form.issues.length === 0 ? " None" : ` ${form.issues.join(", ")}`}
          </small> */}
        </div>{" "}
        <br />
        {/* OTHER ISSUE */}
        <div className="input-group">
          

          <textarea
            value={form.otherIssue}
            onChange={(e) => updateFormField("otherIssue", e.target.value)}
            placeholder="Describe any other issue with your watch..."
          />
        </div>
        {/* FILE UPLOAD */}
        <div className="input-group">
          

          <div className={`file-box ${previews.length ? "uploaded" : ""}`}>
            <input
              type="file"
              multiple
              accept="image/*,video/*"
              onChange={handleFileChange}
            />

            <span className="upload-text">
              {previews.length === 0
                ? "Upload 2 Images & 1 Video"
                : "✅ Files Uploaded Successfully"}
            </span>
          </div>

          {previews.length > 0 && (
            <div className="preview-container">
              {previews.map((file, i) => (
                <div key={i} className="preview-item">
                  {file.type.startsWith("video") ? (
                    <video src={file.url} controls muted playsInline />
                  ) : (
                    <img src={file.url} alt={`Preview ${i + 1}`} />
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
        {/* ADDRESS */}
        <div className="input-group">
          

          <textarea
            value={form.address}
            onChange={(e) => updateFormField("address", e.target.value)}
            placeholder="House No, Street Name, Area..."
            required
          />
        </div>
        {/* ADDRESS GRID */}
        <div className="address-grid">
          <div className="input-group">
            

            <input
              type="text"
              value={form.city}
              onChange={(e) => updateFormField("city", e.target.value)}
              placeholder="Enter City"
              required
            />
          </div>

          <div className="input-group">
            

            <input
              type="text"
              value={form.state}
              onChange={(e) => updateFormField("state", e.target.value)}
              placeholder="Enter State"
              required
            />
          </div>

          <div className="input-group">
            

            <input
              type="text"
              maxLength="6"
              value={form.pincode}
              onChange={(e) =>
                updateFormField("pincode", e.target.value.replace(/\D/g, ""))
              }
              placeholder="6 Digit PIN Code"
              required
            />
          </div>
        </div>{" "}
        {/* BUTTONS */}
        <div className="btn-row">
          <button type="submit">Book My Service</button>

          <button
            type="button"
            className="secondary"
            onClick={() => setCurrentPage("home")}
          >
            🏠 Back To Home
          </button>
        </div>
      </form>
    </div>
  );
}

export default BookService;
