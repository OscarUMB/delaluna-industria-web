"use client";

import { useState, type FormEvent } from "react";

type SubmissionStatus = "idle" | "submitting" | "success";

const fieldClassName =
  "min-h-11 w-full rounded-md border border-brand-green-deep/30 bg-surface-primary px-4 py-3 text-base text-text-primary outline-none transition-colors placeholder:text-text-primary/50 hover:border-brand-green-leaf focus:border-brand-green-deep focus:ring-2 focus:ring-brand-green-deep/20";

function simulateSubmission() {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, 900);
  });
}

export function ContactForm() {
  const [status, setStatus] = useState<SubmissionStatus>("idle");
  const isSubmitting = status === "submitting";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;

    setStatus("submitting");
    await simulateSubmission();
    form.reset();
    setStatus("success");
  }

  return (
    <form
      className="rounded-2xl border border-brand-green-deep/20 bg-surface-primary p-6 sm:p-8"
      onSubmit={handleSubmit}
      aria-busy={isSubmitting}
    >
      <h2 className="font-serif text-3xl font-semibold text-brand-green-deep">
        Envíanos un mensaje
      </h2>

      <div className="mt-8 space-y-5">
        <div>
          <label
            htmlFor="contact-name"
            className="mb-2 block text-sm font-semibold text-text-primary"
          >
            Nombre
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            className={fieldClassName}
            required
          />
        </div>

        <div>
          <label
            htmlFor="contact-email"
            className="mb-2 block text-sm font-semibold text-text-primary"
          >
            Correo
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            className={fieldClassName}
            required
          />
        </div>

        <div>
          <label
            htmlFor="contact-phone"
            className="mb-2 block text-sm font-semibold text-text-primary"
          >
            Teléfono
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={fieldClassName}
            required
          />
        </div>

        <div>
          <label
            htmlFor="contact-message"
            className="mb-2 block text-sm font-semibold text-text-primary"
          >
            Mensaje
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={6}
            className={`${fieldClassName} min-h-36 resize-y`}
            required
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-md bg-brand-green-deep px-6 py-3 text-sm font-semibold text-surface-primary transition-colors hover:bg-brand-green-leaf hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green-deep focus-visible:ring-offset-2 focus-visible:ring-offset-surface-primary disabled:cursor-not-allowed disabled:bg-brand-green-deep/60 disabled:text-surface-primary"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Enviando…" : "Enviar mensaje"}
      </button>

      {status === "success" ? (
        <p
          className="mt-4 rounded-md bg-surface-soft px-4 py-3 text-sm font-medium text-brand-green-deep"
          role="status"
        >
          Envío simulado completado correctamente.
        </p>
      ) : null}
    </form>
  );
}
