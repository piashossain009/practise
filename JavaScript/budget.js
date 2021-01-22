function budgetCalculator(watchNum, mblNum, laptopNum) {
    var totalCost = 0;
    if ( watchNum <= 0 && mblNum <= 0 && laptopNum <= 0){
        return 0;
    }
     else if (watchNum <= 0 && mblNum > 0 && laptopNum > 0) {
        totalWatchCost = watchNum * 0;
        totalmblCost = mblNum * 100;
        totallaptopCost = laptopNum * 500;
        totalCost = totalWatchCost + totalmblCost + totallaptopCost;

    } 
    else if (watchNum <= 0 && mblNum <= 0 && laptopNum > 0) {
        totalWatchCost = watchNum * 0;
        totalmblCost = mblNum * 0;
        totallaptopCost = laptopNum * 500;
        totalCost = totalWatchCost + totalmblCost + totallaptopCost;

    } 
    else if (watchNum <= 0 && mblNum > 0 && laptopNum <= 0) {
        totalWatchCost = watchNum * 0;
        totalmblCost = mblNum * 100;
        totallaptopCost = laptopNum * 0;
        totalCost = totalWatchCost + totalmblCost + totallaptopCost;

    } 
    else if (watchNum > 0 && mblNum <= 0 && laptopNum > 0) {
        totalWatchCost = watchNum * 50;
        totalmblCost = mblNum * 0;
        totallaptopCost = laptopNum * 500;
        totalCost = totalWatchCost + totalmblCost + totallaptopCost;

    } 
    else if (watchNum > 0 && mblNum <= 0 && laptopNum <= 0) {
        totalWatchCost = watchNum * 50;
        totalmblCost = mblNum * 0;
        totallaptopCost = laptopNum * 0;
        totalCost = totalWatchCost + totalmblCost + totallaptopCost;

    } 

    else if (watchNum > 0 && mblNum > 0 && laptopNum <= 0) {
        totalWatchCost = watchNum * 50;
        totalmblCost = mblNum * 100;
        totallaptopCost = laptopNum * 0;
        totalCost = totalWatchCost + totalmblCost + totallaptopCost;

    }
     else {
        totalWatchCost = watchNum * 50;
        totalmblCost = mblNum * 100;
        totallaptopCost = laptopNum * 500;
        totalCost = totalWatchCost + totalmblCost + totallaptopCost;
    }
    return totalCost;

}
var res = budgetCalculator(0, 1, 1);
console.log(res);