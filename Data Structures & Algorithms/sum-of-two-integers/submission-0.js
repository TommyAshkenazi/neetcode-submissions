class Solution {
    getSum(num1, num2) {
        // מתחילים כשהמספר הראשון הוא ה"סכום המצטבר" שלנו
        let runningSum = num1;
        // המספר השני הוא ה"כמות שצריך להוסיף" לסכום הזה
        let amountToAdd = num2; 

        // כל עוד יש לנו עדיין כמות שצריך להוסיף (בין אם זה המספר המקורי או נשאים שנוצרו)
        while (amountToAdd !== 0) {
            // 1. מחשבים את הנשא שנוצר מהחיבור הנוכחי ודוחפים אותו שמאלה
            let carry = (runningSum & amountToAdd) << 1;
            
            // 2. מעדכנים את הסכום המצטבר (חיבור "טיפש" ללא הנשא)
            runningSum = runningSum ^ amountToAdd;
            
            // 3. מעדכנים את הכמות שצריך להוסיף בסיבוב הבא - עכשיו זה יהיה רק הנשא!
            amountToAdd = carry;
        }

        return runningSum;
    }
}