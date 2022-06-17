import React, { useEffect, useState } from "react";

const BranchFestCountDown = ({ now }) => {
  const turnaroundTime = new Date("08-08-2022");
  const countdown = Math.trunc(
    (turnaroundTime.getTime() - now.getTime()) / 1000
  );

  const countdownSec = countdown % 60;
  const countdownMin = Math.trunc((countdown / 60) % 60);
  const countdownHours = Math.trunc((countdown / (60 * 60)) % 24);
  const countdownDays = Math.trunc(countdown / (60 * 60 * 24));

  return (
    <div>
      <h3>Count down to Branch Fest 2022</h3>
      <div>{countdownDays} days</div>
      <div>{countdownHours} hours</div>
      <div>{countdownMin} minutes</div>
      <div>{countdownSec} seconds</div>
    </div>
  );
};

export default BranchFestCountDown;
