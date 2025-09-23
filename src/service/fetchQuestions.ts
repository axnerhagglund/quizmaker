export type QuizItem = {
    question: string,
    answer: string
}
export type CreateQuestionResponse = {
    id: string
}

const API_URL = import.meta.env.VITE_API_URL as string

//skapa en fråga via backend post /questions

export async function createQuestion(item: QuizItem): Promise<CreateQuestionResponse> {
    const res = await fetch(`${API_URL}/questions`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(item)
    })
     if (!res.ok) {
    let message = `Request failed (${res.status})`;
    try {
      const err = await res.json();
      if (err?.error) message = err.error;
    } catch { /* ignore */ }
    throw new Error(message);
  }

  return res.json(); // { id: "..." }
}


