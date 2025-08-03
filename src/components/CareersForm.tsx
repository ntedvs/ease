"use client"

import { Upload } from "lucide-react"

export default function CareersForm() {
  return (
    <div className="mx-auto max-w-2xl">
      <form className="space-y-6">
        <div>
          <label htmlFor="careerName" className="form-label">
            Full Name *
          </label>
          <input
            type="text"
            id="careerName"
            name="careerName"
            required
            className="form-input"
            placeholder="Enter your full name"
          />
        </div>

        <div>
          <label htmlFor="careerEmail" className="form-label">
            Email Address *
          </label>
          <input
            type="email"
            id="careerEmail"
            name="careerEmail"
            required
            className="form-input"
            placeholder="Enter your email address"
          />
        </div>

        <div>
          <label htmlFor="position" className="form-label">
            Position of Interest
          </label>
          <input
            type="text"
            id="position"
            name="position"
            className="form-input"
            placeholder="e.g., Structural Engineer, Project Manager, CAD Technician"
          />
        </div>

        <div>
          <label htmlFor="careerMessage" className="form-label">
            Cover Letter / Message *
          </label>
          <textarea
            id="careerMessage"
            name="careerMessage"
            required
            rows={6}
            className="form-textarea"
            placeholder="Tell us about yourself, your experience, and why you want to join EASE..."
          ></textarea>
        </div>

        <div>
          <label htmlFor="resume" className="form-label">
            Resume / CV *
          </label>
          <div className="relative">
            <input
              type="file"
              id="resume"
              name="resume"
              required
              accept=".pdf,.doc,.docx"
              className="sr-only"
              onChange={(e) => {
                const file = e.target.files?.[0];
                const label = document.querySelector('[data-file-label]');
                const errorMsg = document.querySelector('[data-file-error]');
                
                if (file) {
                  // Validate file size (5MB max)
                  if (file.size > 5 * 1024 * 1024) {
                    if (errorMsg) errorMsg.textContent = 'File size must be less than 5MB';
                    return;
                  }
                  
                  // Validate file type
                  const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
                  if (!allowedTypes.includes(file.type)) {
                    if (errorMsg) errorMsg.textContent = 'Please upload a PDF, DOC, or DOCX file';
                    return;
                  }
                  
                  if (label) label.textContent = file.name;
                  if (errorMsg) errorMsg.textContent = '';
                }
              }}
            />
            <label
              htmlFor="resume"
              className="flex cursor-pointer items-center justify-center border-2 border-dashed border-border bg-neutral/30 px-6 py-8 text-center transition-all duration-200 hover:border-primary hover:bg-primary/5"
              onDragOver={(e) => {
                e.preventDefault();
                e.currentTarget.classList.add('border-primary', 'bg-primary/10');
              }}
              onDragLeave={(e) => {
                e.preventDefault();
                e.currentTarget.classList.remove('border-primary', 'bg-primary/10');
              }}
              onDrop={(e) => {
                e.preventDefault();
                e.currentTarget.classList.remove('border-primary', 'bg-primary/10');
                
                const files = e.dataTransfer.files;
                if (files.length > 0) {
                  const file = files[0];
                  const input = document.getElementById('resume') as HTMLInputElement;
                  const label = document.querySelector('[data-file-label]');
                  const errorMsg = document.querySelector('[data-file-error]');
                  
                  // Validate file size (5MB max)
                  if (file.size > 5 * 1024 * 1024) {
                    if (errorMsg) errorMsg.textContent = 'File size must be less than 5MB';
                    return;
                  }
                  
                  // Validate file type
                  const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
                  if (!allowedTypes.includes(file.type)) {
                    if (errorMsg) errorMsg.textContent = 'Please upload a PDF, DOC, or DOCX file';
                    return;
                  }
                  
                  // Create a new FileList and assign to input
                  const dt = new DataTransfer();
                  dt.items.add(file);
                  if (input) input.files = dt.files;
                  
                  if (label) label.textContent = file.name;
                  if (errorMsg) errorMsg.textContent = '';
                }
              }}
            >
              <div className="space-y-2">
                <div className="flex items-center justify-center">
                  <Upload size={32} className="text-muted" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-foreground" data-file-label>
                    Click to upload or drag and drop your resume
                  </p>
                  <p className="text-xs text-muted">
                    PDF, DOC, or DOCX (max 5MB)
                  </p>
                </div>
              </div>
            </label>
          </div>
          <div className="mt-2 min-h-4">
            <p className="text-xs text-muted">
              We accept PDF, DOC, and DOCX files up to 5MB in size.
            </p>
            <p className="text-xs text-error" data-file-error></p>
          </div>
        </div>

        <button type="submit" className="btn btn-primary btn-lg w-full">
          Submit Application
        </button>

        <p className="text-center text-xs text-muted">
          By submitting this form, you agree to our privacy policy and consent to us contacting you regarding career opportunities at EASE.
        </p>
      </form>
    </div>
  )
}