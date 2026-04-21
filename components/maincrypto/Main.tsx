// app/(dashboard)/new-escrow/page.tsx
"use client";

import { useState } from "react";
import StepBar from "@/components/stepbar/StepBar";
import Step1 from "@/components/steps/Step1";
import Step2 from "@/components/steps/Step2";
import Step3 from "@/components/steps/Step3";
import Step4 from "@/components/steps/Step4";

export default function Page() {
  const [step, setStep] = useState(1);

  const [form, setForm] = useState({
    role: "buyer",
    title: "",
    amount: 0,
    fee: 0,
    invite: "email",
  });

  const next = () => setStep((s) => Math.min(4, s + 1));
  const back = () => setStep((s) => Math.max(1, s - 1));

  return (
    <>
      <StepBar step={step} />

      {step === 1 && <Step1 form={form} setForm={setForm} next={next} />}
      {step === 2 && <Step2 form={form} setForm={setForm} next={next} back={back} />}
      {step === 3 && <Step3 form={form} setForm={setForm} next={next} back={back} />}
      {step === 4 && <Step4 form={form} back={back} />}
    </>
  );
}