enum Membership {
    Simple,
    Standard,
    Premium,
    Platinum
}

enum SocialMedia {
    FACEBOOK = "FACEBOOK",
    INSTAGRAM = "INSTAGRAM",
    TELEGRAM = "TELEGRAM"
}

const memberShip = Membership.Platinum;
console.log(memberShip.toString())

const social = SocialMedia.INSTAGRAM
console.log(social)