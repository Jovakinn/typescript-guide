"use strict";
var Membership;
(function (Membership) {
    Membership[Membership["Simple"] = 0] = "Simple";
    Membership[Membership["Standard"] = 1] = "Standard";
    Membership[Membership["Premium"] = 2] = "Premium";
    Membership[Membership["Platinum"] = 3] = "Platinum";
})(Membership || (Membership = {}));
var SocialMedia;
(function (SocialMedia) {
    SocialMedia["FACEBOOK"] = "FACEBOOK";
    SocialMedia["INSTAGRAM"] = "INSTAGRAM";
    SocialMedia["TELEGRAM"] = "TELEGRAM";
})(SocialMedia || (SocialMedia = {}));
const memberShip = Membership.Platinum;
console.log(memberShip.toString());
const social = SocialMedia.INSTAGRAM;
console.log(social);
//# sourceMappingURL=enum.js.map