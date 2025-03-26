// Copyright DataStax, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { db } from "../util/db.js";

export async function CreateCollection(params: {
  collectionName: string;
  vector?: boolean;
  dimension?: number;
}) {
  const { collectionName, vector = true, dimension = 1536 } = params;

  if (vector) {
    await db.createCollection(collectionName, {
      vector: {
        dimension: dimension,
      },
    });
  } else {
    await db.createCollection(collectionName);
  }

  return {
    success: true,
    message: `Collection '${collectionName}' created successfully`,
  };
}
