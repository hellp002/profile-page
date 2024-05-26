"use client";
export default function TestBtn() {
  async function testCommand() {
    const input = prompt();
    const result = await fetch("/api/helloworld", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "6431343021@student.chula.ac.th",
        to: "6431343021@student.chula.ac.th",
        subject: input,
      }),
    });
    console.log(result);
  }
  return <button onClick={testCommand}>test</button>;
}
