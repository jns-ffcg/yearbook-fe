import React from "react";

export class Header extends React.Component {
  private title = "Yearbook";

  render(): React.ReactNode {
    return (
      <div className="flex h-72 items-center justify-center bg-slate-500">
        <div className="text-3xl text-white">{this.title}</div>
      </div>
    );
  }
}
