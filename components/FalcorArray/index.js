import React from "react";

export default function FalcorArray({
  data,
  wrapperBuilder: Wrapper,
  itemBuilder,
}) {
  const keys = Object.keys(data);
  const children = Object.values(
    keys.map((key) => itemBuilder({ key, value: data[key] }))
  );

  if (Wrapper) {
    return <Wrapper>{children}</Wrapper>;
  }

  return children;
}
