const var1Essay = $('.form-control-var1');
const var2Essay = $('.form-control-var2');
const var3Essay = $('.form-control-var3');
const var4Essay = $('.form-control-var4');
const var5Essay = $('.form-control-var5');
const var6Essay = $('.form-control-var6');
const speechEssay = $('.form-control-speech');

const btnCreateEssay = $('.btn-Create-Essay');
const btnApply = $('.btn-Apply');
const textEssay = $('.text');

const startObj = {"text":[
  "Жили-были {var1} да {var2},",
  "Была у них {var3},",
  "Снесла {var3} {var4}, не простое - золотое.",
  "- {var1} бил, бил - не разбил.",
  "- {var2} била, била - не разбила.",
  "{var5} бежала, {var6} задела, {var4} упало и разбилось.",
  "{var1} плачет, {var2} плачет, а {var3} кудахчет:",
  " {speech}."
]};

btnCreateEssay.click(function(){
  textEssay.html(startObj.text);
});

btnApply.click(function(){
  const var1 = var1Essay.val();
  const var2 = var2Essay.val();
  const var3 = var3Essay.val();
  const var4 = var4Essay.val();
  const var5 = var5Essay.val();
  const var6 = var6Essay.val();
  const speech = speechEssay.val();

  const newObj = {"text":[
    `Жили-были ${var1} да ${var2},`,
    ` Была у них ${var3},`,
    ` Снесла ${var3} ${var4}, не простое - золотое.`,
    `- ${var1} бил, бил - не разбил.`,
    `- ${var2} била, била - не разбила.`,
    ` ${var5} бежала, ${var6} задела, ${var4} упало и разбилось.`,
    ` ${var1} плачет, ${var2} плачет, а ${var3} кудахчет:`,
    ` ${speech}.`
    ]
  };
  textEssay.html(newObj.text);

});
