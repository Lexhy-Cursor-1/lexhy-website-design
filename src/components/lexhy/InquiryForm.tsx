import { FormEvent, useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name.").max(100),
  organisation: z.string().trim().min(1, "Please enter your organisation.").max(150),
  email: z.string().trim().email("Please enter a valid email address.").max(255),
  identity: z.enum(["Family office", "Private bank or trustee", "Professional adviser", "Family", "Other"]),
  note: z.string().trim().min(1, "Please leave a short note.").max(1500),
  acknowledged: z.literal(true, { errorMap: () => ({ message: "Please confirm the acknowledgement." }) }),
});

const invitationSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name.").max(100),
  firm: z.string().trim().min(1, "Please enter your firm.").max(150),
  role: z.string().trim().min(1, "Please enter your role.").max(120),
  email: z.string().trim().email("Please enter a valid email address.").max(255),
  jurisdiction: z.string().trim().min(1, "Please enter your jurisdiction.").max(120),
  note: z.string().trim().min(1, "Please leave a short note.").max(1500),
  acknowledged: z.literal(true, { errorMap: () => ({ message: "Please confirm the acknowledgement." }) }),
});

type FieldErrors = Record<string, string>;

const fieldClass = "w-full border-0 border-b border-border bg-transparent px-0 py-3 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-foreground focus:ring-0";

function Field({ label, name, type = "text", error }: { label: string; name: string; type?: string; error?: string }) {
  return (
    <label className="block">
      <span className="form-label">{label}</span>
      <input name={name} type={type} className={fieldClass} aria-invalid={Boolean(error)} aria-describedby={error ? `${name}-error` : undefined} />
      {error ? <span id={`${name}-error`} className="mt-2 block text-sm text-destructive">{error}</span> : null}
    </label>
  );
}

export function InquiryForm({ type }: { type: "contact" | "invitation" }) {
  const [errors, setErrors] = useState<FieldErrors>({});
  const [acknowledged, setAcknowledged] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const values = Object.fromEntries(form.entries());
    const payload = { ...values, acknowledged };
    const result = (type === "contact" ? contactSchema : invitationSchema).safeParse(payload);
    if (!result.success) {
      const nextErrors: FieldErrors = {};
      result.error.issues.forEach((issue) => {
        const key = String(issue.path[0]);
        if (!nextErrors[key]) nextErrors[key] = issue.message;
      });
      setErrors(nextErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="border-t border-border py-12" role="status" aria-live="polite">
        <p className="eyebrow">Message received</p>
        <p className="mt-5 max-w-[58ch] font-serif text-3xl leading-snug">
          {type === "contact"
            ? "Thank you. If a member firm can assist, they will reply. Lexhy will not provide legal advice."
            : "If an invitation is appropriate, we will write. There is no automated sequence."}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-x-10 gap-y-9 border-t border-border pt-10 md:grid-cols-2">
      <Field label="Name" name="name" error={errors.name} />
      {type === "contact" ? (
        <Field label="Organisation" name="organisation" error={errors.organisation} />
      ) : (
        <Field label="Firm" name="firm" error={errors.firm} />
      )}
      {type === "invitation" ? <Field label="Role" name="role" error={errors.role} /> : null}
      <Field label="Email" name="email" type="email" error={errors.email} />
      {type === "contact" ? (
        <label className="block">
          <span className="form-label">You are</span>
          <select name="identity" defaultValue="" className={fieldClass} aria-invalid={Boolean(errors.identity)}>
            <option value="" disabled>Select one</option>
            <option>Family office</option>
            <option>Private bank or trustee</option>
            <option>Professional adviser</option>
            <option>Family</option>
            <option>Other</option>
          </select>
          {errors.identity ? <span className="mt-2 block text-sm text-destructive">Please select one.</span> : null}
        </label>
      ) : (
        <Field label="Jurisdiction" name="jurisdiction" error={errors.jurisdiction} />
      )}
      <label className="block md:col-span-2">
        <span className="form-label">Note</span>
        <textarea name="note" rows={4} maxLength={1500} className={`${fieldClass} resize-y`} aria-invalid={Boolean(errors.note)} />
        {errors.note ? <span className="mt-2 block text-sm text-destructive">{errors.note}</span> : null}
      </label>
      <div className="md:col-span-2">
        <label className="flex max-w-[68ch] cursor-pointer items-start gap-3 text-sm leading-6 text-muted-foreground">
          <Checkbox checked={acknowledged} onCheckedChange={(value) => setAcknowledged(value === true)} aria-invalid={Boolean(errors.acknowledged)} className="mt-1 rounded-none border-foreground" />
          <span>
            {type === "contact"
              ? "I understand Lexhy is not a law firm and does not give legal advice. An enquiry may be passed to an independently owned member firm."
              : "This is not an application and not an offer. Lexhy is a management company, not a law firm."}
          </span>
        </label>
        {errors.acknowledged ? <span className="mt-2 block text-sm text-destructive">{errors.acknowledged}</span> : null}
      </div>
      <div className="md:col-span-2">
        <Button type="submit" className="h-11 rounded-none bg-foreground px-7 text-[11px] uppercase tracking-[0.16em] text-background hover:bg-transparent hover:text-foreground hover:ring-1 hover:ring-foreground">
          {type === "contact" ? "Send" : "Submit privately"}
        </Button>
      </div>
    </form>
  );
}
