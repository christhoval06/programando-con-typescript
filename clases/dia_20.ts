/**
 * Modelar un dia de tu vida, usanod interfaces, types y objectos
 * Ejemplo:
 * type Comida = string;
 * type Tiempo = number;
 *
 * interface Trabajo {
 * tiempo: Tiempo
 * projectos: Array<string>
 * }
 *
 * interface Vida {
 * dormir: number;
 * comer: Array<Comida>;
 * trabajar:...
 * }
 *
 * const miVida: Vida = {
 * dormir: 5
 * ....
 * }
 *
 */
(() => {
  interface Vida {
    comida: string;
    tiempo: number;
  }
  const miComida = (vida: Vida) => {
    console.log(`Comiendo ${vida.comida}`);
  };

  const miTiempo = (vida: Vida) => {
    console.log(`Tiempo viendo TV ${vida.tiempo} horas`);
  };

  const VidaAdonis: Vida = {
    comida: "Sopa de Pata",
    tiempo: 2
  };

  miComida(VidaAdonis);
  miTiempo(VidaAdonis);
})();

enum Relationship {
  single,
  married,
  friendZone,
  foreverAlone
}

enum FamilyRelatives {
  GrandParent = "Abuelos",
  Uncle = "Tios",
  Parent = "Padres",
  Cousin = "Primos",
  Nephew = "Sobrinos",
  Child = "Hijos"
}

interface Person {
  name: string;
  age: number;
  isAlive: boolean;
}

interface FamilyMember extends Person {
  relative: FamilyRelatives;
}

interface Friend extends Person {
  ago: number;
}

interface Work {
  name: string;
  time: number;
}

interface Study {
  name: string;
  time: number;
}

interface PersonLife {
  relationship: Relationship;
  lifeAlone: boolean;
  familyMembers: Array<FamilyMember>;
  friends?: Array<Friend>;
  isWorking?: boolean;
  hereWork?: Work;
  isStudying?: boolean;
  whereStudy?: Study;
  favorieFood?: string;
  areTattooed: boolean;
  boneBreak: boolean;

  isNiNi: () => string;
  findFamily(fr: FamilyRelatives): FamilyMember | undefined;
}

const Adonis: PersonLife = {
  relationship: Relationship.friendZone,
  lifeAlone: false,
  familyMembers: [
    {
      name: "Abuelo",
      age: 68,
      isAlive: true,
      relative: FamilyRelatives.GrandParent
    },
    {
      name: "Abuela",
      age: 62,
      isAlive: false,
      relative: FamilyRelatives.GrandParent
    },
    {
      name: "Mamá",
      age: 50,
      isAlive: true,
      relative: FamilyRelatives.Parent
    }
  ],
  areTattooed: false,
  boneBreak: false,

  isStudying: true,
  isWorking: false,
  isNiNi() {
    if (!this.isStudying && !this.isWorking) {
      return "you're a NiNi";
    }
    return "you aren't a NiNi";
  },
  findFamily(fr: FamilyRelatives): FamilyMember | undefined {
    return this.familyMembers.find(
      (member: FamilyMember) => member.relative === fr
    );
  }
};

console.log(Adonis);
console.log(Adonis.isNiNi());
console.log(Adonis.findFamily(FamilyRelatives.GrandParent));
console.log(Adonis.findFamily(FamilyRelatives.Parent));
