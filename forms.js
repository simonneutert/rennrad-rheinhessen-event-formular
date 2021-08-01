class DynamicFormText {
  constructor(form = {}) {
    this.form = form;
  }

  serialize() {
    const introduction = this.introduction(this.form.introduction);
    const distance = this.distance(this.form.distance);
    const elevation = this.elevation(this.form.elevation);
    const tempo = this.tempo(this.form.tempo);
    const surface = this.surface(this.form.surface);
    const stopsWhilst = this.stopsWhilst(this.form.stopsWhilst);
    const stopsFinished = this.stopFinished(this.form.stopFinished);
    const profile = this.profile(this.form.profile);
    const urlGps = this.urlGps(this.form.urlGps);
    const ethics = this.ethics(this.form.ethics);
    const alwaysEasy = this.alwaysEasy(this.form.alwaysEasy);

    let result = "";
    console.log(introduction);
    if (introduction.length) {
      result += introduction;
      result += "\n\n";
    }
    result += `${distance} mit ${elevation} und ${tempo}`;
    result += ` ${profile} ${surface}`;
    result += "\n\n";

    result += `${stopsWhilst}`;
    if (stopsFinished.length) result += ` ${stopsFinished}`;
    result += "\n\n";

    if (alwaysEasy.length) {
      result += `${alwaysEasy}`;
      result += "\n\n";
    }

    if (urlGps.length) {
      result += `${urlGps}`;
      result += "\n\n";
    }

    if (ethics.length) result += ethics;

    result +=
      "\n\nUnterstützt die Guides. Bleibt entspannt, es wird wirklich zu 100 % nicht alles rund laufen. Tragt selbst zu einer gelungenen Erfahrung für alle bei ♥️";

    return result;
  }

  introduction(str) {
    if (str) {
      return str;
    } else {
      return "";
    }
  }

  distance(number) {
    return `Die Fahrt ist mit ${number} km angesetzt`;
  }

  tempo(number) {
    return `angedacht sind ${number} km/h (in Gruppen tendiert es aber erfahrungsgemäß zu ${number} +2 km/h mehr).`;
  }

  elevation(number) {
    return `${number} Hm`;
  }

  stopsWhilst(number) {
    switch (parseInt(number)) {
      case 0:
        return `Geplant sind ${number} Stopps an Tanken/Bäckereien/Eisdielen/etc.`;
      case 1:
        return `Geplant sind mindestens ${number} Tanken/Bäckereien/Eisdielen/etc.`;
      default:
        return `Geplant sind mindestens ${number} Stopps an Tanken/Bäckereien/Eisdielen/etc.`;
    }
  }

  stopFinished(bool) {
    if (bool) {
      return `Wer will kann am Ende mit der Gruppe gemeinsam etwas trinken/essen.`;
    } else {
      return "";
    }
  }

  surface(str) {
    let text;
    switch (str) {
      case "road":
        text = `Gefahren wird haupstächlich Straße.`;
        break;
      case "cylepaths":
        text = `Gefahren werden asphaltierte Fahrradwege und Straße wenn nötig.`;
        break;
      case "mixed":
        text = `Gefahren werden asphaltierte Feldwege, asphaltierte Fahrradwege und etwas Straße.`;
        break;
      case "gravel":
        text = `Gefahren werden überwiegend Feld- und Waldwege, die nicht asphaltiert sein müssen.`;
        break;
      default:
        break;
    }
    return text;
  }

  profile(type) {
    let text;
    switch (type) {
      case "flat":
        text = `Das Profil ist überwiegend flach.`;
        break;
      case "hilly":
        text = `Es ist auf 10 km mit etwa 100 Hm zu rechnen.`;
        break;
      case "mountain":
        text = `Es ist auf 10 km ist mit mehr als 100 Hm zu rechnen oder es gibt längere Anstiege von 10 Minuten und mehr.`;
        break;
      default:
        break;
    }
    return text;
  }

  urlGps(url) {
    if (url) {
      return `Link zur GPS Route: ${url}`;
    } else {
      return "";
    }
  }

  alwaysEasy(bool) {
    if (bool) {
      return `Jedes Mitglied der Gruppe VERPFLICHTET sich mit darauf zu achten, dass kein Mitfahrer hinten herauspurzelt!`;
    } else {
      return "";
    }
  }

  ethics(bool) {
    if (bool) {
      let text = "";
      text +=
        'Allgemeines: Gruppenausfahrt bedeutet wie immer, dass wir gemeinsam im Flachen unterwegs sind. Am Berg kann jeder sein eigenes Tempo wählen und oben wird gewartet, bis die Gruppe wieder vollständig ist, um dann wieder von vorne zu beginnen. Lasst bitte "langsamere" Fahrer nicht alleine und ermutigt/begleitet diese auf der Fahrt. In beiden Gruppen wird auf zurückgefallene gewartet. Nehmt auch auf alle Anderen Rücksicht. STVO, Corona, Anstand, etc.';
      text += "\n\n";
      text +=
        "An die, die kämpfen oder drohen aus der Gruppe zu fallen sei auch ein Wort gerichtet: Bitte sprecht mit den Guides und Mitfahrern, sie werden euch helfen im Zweifel eine kleine eigene Gruppe zu finden, damit niemand über- oder unterfordert ist.";
      return text;
    } else {
      return "";
    }
  }
}
