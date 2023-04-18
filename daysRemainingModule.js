const daysRemainingModule = (() => {
  const calculateDaysRemaining = (targetDate) => {
    const targetTime = new Date(targetDate).getTime();
    const currentTime = new Date().getTime();
    const timeRemaining = targetTime - currentTime;
    const daysRemaining = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    return daysRemaining;
  };

  return {
    calculateDaysRemaining,
  };
})();

module.exports = daysRemainingModule;
