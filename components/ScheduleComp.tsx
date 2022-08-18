/* eslint-disable @next/next/no-before-interactive-script-outside-document */
import React from "react";
import Script from "next/script";

function ScheduleComp() {
  return (
    <div
      className="meetings-iframe-container"
      data-src="https://meetings.hubspot.com/fresh-springs?embed=true"
    >
      <Script
        type="text/javascript"
        src="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js"
        strategy="afterInteractive"
        defer={false}
      ></Script>
    </div>
  );
}

export default ScheduleComp;
