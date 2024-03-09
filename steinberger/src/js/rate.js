$(document).ready(function () {
  // readonly ratings in comment, author block
  if ($(".rate").length) {
    $(".rate").rate({
      step_size: 1,
      symbols: {
        utf8_star: {
          base:
            '<svg style="width: 43px; height: 29px;"><use xlink:href="./images/sprites.svg#star"></use></svg>',
          hover:
            '<svg style="width: 43px; height: 29px;"><use xlink:href="./images/sprites.svg#star-active"></use></svg>',
          selected:
            '<svg style="width: 43px; height: 29px;"><use xlink:href="./images/sprites.svg#star-active"></use></svg>',
        },
      },
      readonly: true,
    });
  }
  // functional rating
  if ($(".rate-comment").length) {
    $(".rate-comment").rate({
      step_size: 1,
      symbols: {
        utf8_star: {
          base:
            '<svg style="width: 43px; height: 29px;"><use xlink:href="./images/sprites.svg#star"></use></svg>',
          hover:
            '<svg style="width: 43px; height: 29px;"><use xlink:href="./images/sprites.svg#star-active"></use></svg>',
          selected:
            '<svg style="width: 43px; height: 29px;"><use xlink:href="./images/sprites.svg#star-active"></use></svg>',
        },
      },
    });
  }
});
