function Circle({ className, width, height, fill = true, ...props }) {
  return (
    <div
      className={`absolute ${className} ${
        fill ? "bg-primary" : "bg-[#b6dffc]"
      } rounded-full`}
      style={{ width: `${width}px`, height: `${height}px` }}
      {...props}
    ></div>
  );
}

export default Circle;
