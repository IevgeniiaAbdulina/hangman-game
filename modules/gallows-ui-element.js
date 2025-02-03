"use strict";

const gallowsImage = document.createElement('div');
gallowsImage.className = 'gallows-image';

const bodyPartsContainer = document.createElement("div");
bodyPartsContainer.className = "body-parts__wrapper";
bodyPartsContainer.append(gallowsImage);

const gallowsPartWrapper = document.createElement('div');
gallowsPartWrapper.id = 'gallows-part';
gallowsPartWrapper.className = 'wrapper';

gallowsPartWrapper.append(bodyPartsContainer);

export {gallowsPartWrapper}
