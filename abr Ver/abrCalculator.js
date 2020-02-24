      var val1 = document.getElementById("val1");

      var val2 = document.getElementById("val2");

      var total = document.getElementById("total");

      var butAdd = document.getElementById("butAdd");
      var butSub = document.getElementById("butSub");
      var butMul = document.getElementById("butMul");
      var butDiv = document.getElementById("butDiv");
      var butTot = document.getElementById("butTot");
      var butClr = document.getElementById("butClr");
      var butDel = document.getElementById("butDel");

      var operator = null;
      total.value = "0";
      val1.value = 0;
      val2.value = "";

      // Operators

      function totNum() {
        var left = parseInt(total.value);
        var right = parseInt(val1.value);

        if (operator === "+") {
          console.log("suma", val1.value, total.value, operator);
          total.value = left + right;
        } else if (operator === "-") {
          console.log("resta", val1.value, total.value, operator);
          total.value = right - left;
        } else if (operator === "/") {
          console.log("resta", total.value, operator);
        }
      }

      butTot.addEventListener("click", totNum);

      var ops = document.getElementsByClassName("opKey");
      for (let index = 0; index < ops.length; index++) {
        var element = ops[index];
        element.addEventListener("click", function(e) {
          operator = this.value;
          if (parseInt(val1.value) !== 0 && parseInt(total.value) !== 0) {
            totNum();
          }
          val1.value = parseInt(total.value);
          total.value = 0;
        });
      }

      //   butAdd.addEventListener("click", function plusNum() {
      //     val1.value = parseInt(val1.value) + parseInt(total.value);
      //     total.value = "0";
      //   });

      //   butSub.addEventListener("click", function subNum() {
      //     console.log("subNum", val1.value, total.value, val2.value);
      //     var left = parseInt(val1.value);
      //     var right = parseInt(total.value);

      //     val1.value = left - right;

      //     total.value = "0";
      //     console.log("subNum", val1.value, total.value, val2.value);

      //     /*   if (val1<0)
      //      {
      //      val1.value = parseInt(val1.value) - parseInt(total.value);
      //      total.value = "0";
      //      }
      //    else
      //    {
      //      val1.value = parseInt(val1.value) + parseInt(total.value);
      //      total.value = "0";
      //    }

      // */
      //   });

      butClr.addEventListener("click", function() {
        val1.value = 0;
        total.value = 0;
      });

      butDel.addEventListener("click", function() {
        val1.value = 0;
        total.value = 0;
        val2.value = "";
      });

      // Numbers

      num1.addEventListener("click", function() {
        if (total.value == 0) {
          total.value = "";
          total.value += "1";
          // val1.value += "1";
        } else {
          total.value += "1";
        }
      });

      num2.addEventListener("click", function() {
        if (total.value == 0) {
          total.value = "";
          total.value += "2";
          // val1.value += "1";
        } else {
          total.value += "2";
        }
      });

      num3.addEventListener("click", function() {
        if (total.value == 0) {
          total.value = "";
          total.value += "3";
          // val1.value += "1";
        } else {
          total.value += "3";
        }
      });

      num4.addEventListener("click", function() {
        if (total.value == 0) {
          total.value = "";
          total.value += "4";
          // val1.value += "1";
        } else {
          total.value += "4";
        }
      });

      num5.addEventListener("click", function() {
        if (total.value == 0) {
          total.value = "";
          total.value += "5";
          // val1.value += "1";
        } else {
          total.value += "5";
        }
      });

      num6.addEventListener("click", function() {
        if (total.value == 0) {
          total.value = "";
          total.value += "6";
          // val1.value += "1";
        } else {
          total.value += "6";
        }
      });

      num7.addEventListener("click", function() {
        if (total.value == 0) {
          total.value = "";
          total.value += "7";
          // val1.value += "1";
        } else {
          total.value += "7";
        }
      });

      num8.addEventListener("click", function() {
        if (total.value == 0) {
          total.value = "";
          total.value += "8";
          // val1.value += "1";
        } else {
          total.value += "8";
        }
      });

      num9.addEventListener("click", function() {
        if (total.value == 0) {
          total.value = "";
          total.value += "9";
          // val1.value += "1";
        } else {
          total.value += "9";
        }
      });

      num0.addEventListener("click", function() {
        if (total.value == 0) {
          total.value = "";
          total.value += "0";
          // val1.value += "1";
        } else {
          total.value += "0";
        }
      });
      numDot.addEventListener("click", function() {
        if (total.value == 0) {
          total.value = "";
          total.value += ".";
          // val1.value += "1";
        } else {
          total.value += ".";
        }
      });