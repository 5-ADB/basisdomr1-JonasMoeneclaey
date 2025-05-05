const groenten = [
  {
    id: 1,
    naam: "prei",
    prijs: 2.1,
  },
  {
    id: 2,
    naam: "brocoli",
    prijs: 1.5,
  },
  {
    id: 3,
    naam: "tomaat",
    prijs: 3.4,
  },
  {
    id: 4,
    naam: "erwten",
    prijs: 0.7,
  },
];

const lijstGroenten = document.querySelector("#lijst")
const lijstKostprijs = document.querySelector("#kostprijs")
const groentenSel = document.createElement("select")

lijstGroenten.appendChild(groentenSel)

groenten.forEach((groente) => {
  const groenteOptie = document.createElement("option")
  groenteOptie.innerHTML = groente.naam
  groentenSel.appendChild(groenteOptie)
  })

const kostprijs = groenten.forEach((prijs) => {
  return prijs.prijs
}) 


groentenSel.addEventListener(("click"),  => {
  const groentePrijsP = document.createElement("P")
  groentePrijsP.innerHTML = kostprijs
  lijstKostprijs.appendChild(groentePrijsP)
})

