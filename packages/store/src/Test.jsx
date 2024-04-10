import React, { useState } from "react";

export default function Test({ number }) {
  const [test, setTest] = useState(3);
  return (
    <div>
      Test: {test}, {number}
    </div>
  );
}
