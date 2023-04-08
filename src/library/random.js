const adjectives = ['Kreativni', 'Ekscentrični', 'Profesionalni', 'Zabavni', 'Zanimljivi', 'Inovativni', 'Smioni', 'Minimalistički', 'Čisti', 'Razigrani'];
const nouns = ['Umjetnik', 'Vizionar', 'Stručnjak', 'Entuzijast',  'Putnik', 'Maverick', 'Pustolov', 'Guru', 'Kameleon', 'Prijatelj'];

export function getRandomName() {
    const adjectiveIndex = Math.floor(Math.random() * adjectives.length);
    const nounIndex = Math.floor(Math.random() * nouns.length);

    return `${adjectives[adjectiveIndex]} ${nouns[nounIndex]}`;
}
