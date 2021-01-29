import React from "react";

export default function FalcorMap({
  data,
  wrapperBuilder: Wrapper,
  itemBuilder,
}) {
  const keys = Object.keys(data);
  const children = Object.values(
    keys
      .filter((k) => k !== "length" && k !== "$__path")
      .map((key) => {
        const { $__path, length, ...value } = data[key];
        return itemBuilder({ key, $__path, length, value });
      })
  );

  if (Wrapper) {
    return <Wrapper>{children}</Wrapper>;
  }

  return children;
}
