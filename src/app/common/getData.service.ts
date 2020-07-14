import {
  AngularFirestore,
  AngularFirestoreCollection,
} from "@angular/fire/firestore";
import { Observable, Subject, BehaviorSubject, combineLatest } from "rxjs";
import { map, switchMap } from "rxjs/operators";
import { Dyktando } from "./dyktanda.interface";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class getData {
  classNum$: BehaviorSubject<string | null>;
  dLength$: BehaviorSubject<string | null>;
  tests$: BehaviorSubject<string | null>;
  orderBy$: BehaviorSubject<{ orderBy: string; order: any }>;
  limit$: BehaviorSubject<number | null>;
  dyktanda$: Observable<Dyktando[]>;

  dyktandaDocId$: Subject<string>;
  document$: Observable<Dyktando>;
  queryObservable;

  items: Observable<Dyktando[]>;
  itemsNum = new Subject<number>();
  queryObservable2 = this.itemsNum.pipe(
    switchMap((itemsNumber) =>
      this.afs
        .collection("dyktanda", (ref) => ref.limit(itemsNumber))
        .snapshotChanges()
        .pipe(map(this.mapToDyktando))
    )
  );
  constructor(private afs: AngularFirestore) {
    this.dyktandaDocId$ = new Subject();
    this.document$ = new BehaviorSubject(null);

    this.dyktandaDocId$.pipe(
      switchMap((id) => {
        return this.afs.doc<Dyktando>(`dyktanda/${id}`).valueChanges();
      })
    );
    this.classNum$ = new BehaviorSubject(null);
    this.dLength$ = new BehaviorSubject(null);
    this.tests$ = new BehaviorSubject(null);
    this.orderBy$ = new BehaviorSubject(null);
    this.limit$ = new BehaviorSubject(10);
    this.dyktanda$ = new Observable();
    this.dyktanda$ = combineLatest(
      this.classNum$,
      this.dLength$,
      this.tests$,
      this.orderBy$,
      this.limit$
    ).pipe(
      switchMap(([classNum$, dLength$, tests$, orderBy, limit]) =>
        afs
          .collection("dyktanda", (ref) => {
            console.log(dLength$);
            let query:
              | firebase.firestore.CollectionReference
              | firebase.firestore.Query = ref;
            if (classNum$ !== null && classNum$ !== "all") {
              query = query.where("classNum", "==", classNum$);
            }
            if (dLength$ !== null && dLength$ !== "all") {
              query = query.where("dLength", "==", dLength$);
            }
            if (tests$ !== null && tests$ !== "all") {
              query = query.where("tests", "==", tests$);
            }
            if (orderBy !== null) {
              query = query.orderBy(orderBy.orderBy, orderBy.order);
            }
            if (limit !== null) {
              query = query.limit(limit);
            }
            return query;
          })
          .snapshotChanges()
          .pipe(map(this.mapToDyktando))
      )
    );
  }
  mapToDyktando = (action) =>
    action.map((a) => {
      const data = a.payload.doc.data() as Dyktando;
      const id = a.payload.doc.id;
      return { ...data, id };
    });
  getDyktanda(queryParams: {
    classNum?: string | null;
    length?: string | null;
    tests?: string | null;
    orderBy?: { orderBy: string; order: any } | null;
    limit?: number | null;
  }) {
    let { classNum, length, tests, orderBy, limit } = queryParams;
    if (classNum) {
      this.classNum$.next(classNum);
    }
    if (length) {
      this.dLength$.next(length);
    }
    if (tests) {
      this.tests$.next(tests);
    }
    if (orderBy) {
      this.orderBy$.next(orderBy);
    }
    if (limit) {
      this.limit$.next(limit);
    }
  }
  getDocument(id: string) {
    return this.afs.doc<Dyktando>(`dyktanda/${id}`).valueChanges();
  }
}
